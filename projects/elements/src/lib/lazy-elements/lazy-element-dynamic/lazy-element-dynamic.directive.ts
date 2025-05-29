import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  EmbeddedViewRef,
  inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
  input,
  DOCUMENT,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { from, mergeMap } from 'rxjs';

import { ElementConfig } from '../lazy-elements.interface';
import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  standalone: true,
  selector: '[axLazyElementDynamic]',
})
export class LazyElementDynamicDirective implements OnInit {
  readonly tag = input<string | null>(null, { alias: 'axLazyElementDynamic' });
  readonly url = input<string | null>(null, {
    alias: 'axLazyElementDynamicUrl',
  });
  readonly loadingTemplateRef = input<TemplateRef<any> | null>(null, {
    alias: 'axLazyElementDynamicLoadingTemplate',
  });
  readonly errorTemplateRef = input<TemplateRef<any> | null>(null, {
    alias: 'axLazyElementDynamicErrorTemplate',
  });
  readonly isModule = input(false, { alias: 'axLazyElementDynamicModule' });
  readonly importMap = input(false, { alias: 'axLazyElementDynamicImportMap' });
  readonly loadingSuccess = input<() => void>(undefined, {
    alias: 'axLazyElementLoadingSuccess',
  });
  readonly loadingError = input<(error: ErrorEvent) => void>(undefined, {
    alias: 'axLazyElementLoadingError',
  });

  #viewRef: EmbeddedViewRef<any> | null = null;

  readonly #destroyRef = inject(DestroyRef);
  readonly #platformId = inject(PLATFORM_ID);
  readonly #document = inject(DOCUMENT);
  readonly #renderer = inject(Renderer2);
  readonly #vcr = inject(ViewContainerRef);
  readonly #cdr = inject(ChangeDetectorRef);
  readonly #template = inject(TemplateRef<any>);
  readonly #elementsLoaderService = inject(LazyElementsLoaderService);

  ngOnInit() {
    // There's no sense to execute the below logic on the Node.js side since the JavaScript
    // will not be loaded on the server-side (Angular will only append the script to body).
    // The `loadElement` promise will never be resolved, since it gets resolved when the `load` event is emitted.
    // `customElements` are also undefined on the Node.js side; thus, it will always render the error template.
    if (isPlatformServer(this.#platformId)) {
      return;
    }

    const tagValue = this.tag();
    if (ngDevMode) {
      if (!tagValue || tagValue.length === 0 || !tagValue.includes('-')) {
        throw new Error(
          `${LOG_PREFIX} - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${tagValue}"`,
        );
      }
    }

    const tag = tagValue!;

    const elementConfig =
      this.#elementsLoaderService.getElementConfig(tag) ||
      ({} as ElementConfig);
    const options = this.#elementsLoaderService.options;
    const loadingComponent =
      elementConfig.loadingComponent || options.loadingComponent;

    const loadingTemplateRef = this.loadingTemplateRef();
    if (loadingTemplateRef) {
      this.#vcr.createEmbeddedView(loadingTemplateRef);
    } else if (loadingComponent) {
      this.#vcr.createComponent(loadingComponent);
    }

    const loadElement$ = from(
      this.#elementsLoaderService.loadElement(
        this.url(),
        tag,
        this.isModule(),
        this.importMap(),
        elementConfig?.hooks,
      ),
    );

    loadElement$
      .pipe(
        mergeMap(() => customElements.whenDefined(tag)),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe({
        next: () => {
          this.loadingSuccess()?.();
          this.#vcr.clear();
          const originalCreateElement = this.#renderer.createElement;
          this.#renderer.createElement = (name: string, namespace: string) => {
            if (name === 'ax-lazy-element') {
              name = tag;
            }
            return this.#document.createElement(name);
          };
          this.#viewRef = this.#vcr.createEmbeddedView(this.#template);
          this.#renderer.createElement = originalCreateElement;
          this.#cdr.markForCheck();
        },
        error: (error) => {
          this.loadingError()?.(error);
          const errorComponent =
            elementConfig.errorComponent || options.errorComponent;
          this.#vcr.clear();
          const errorTemplateRef = this.errorTemplateRef();
          if (errorTemplateRef) {
            this.#vcr.createEmbeddedView(errorTemplateRef);
            this.#cdr.markForCheck();
          } else if (errorComponent) {
            this.#vcr.createComponent(errorComponent);
            this.#cdr.markForCheck();
          } else if (ngDevMode && !this.loadingError()) {
            console.error(
              `${LOG_PREFIX} - Loading of element <${this.tag()}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n`,
              error,
            );
          }
        },
      });
  }

  destroyEmbeddedView() {
    if (this.#viewRef && !this.#viewRef.destroyed) {
      this.#viewRef.detach();
      this.#viewRef.destroy();
      this.#viewRef = null;
    }
  }
}
