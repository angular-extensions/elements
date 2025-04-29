import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  EmbeddedViewRef,
  inject,
  OnInit,
  PLATFORM_ID,
  TemplateRef,
  ViewContainerRef,
  input,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import {
  takeUntilDestroyed,
  toObservable,
  toSignal,
} from '@angular/core/rxjs-interop';
import {
  animationFrameScheduler,
  BehaviorSubject,
  EMPTY,
  from,
  catchError,
  debounceTime,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs';

import { ElementConfig } from '../lazy-elements.interface';
import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  standalone: true,
  selector: '[axLazyElement]',
})
export class LazyElementDirective implements OnInit {
  readonly #platformId = inject(PLATFORM_ID);
  readonly #destroyRef = inject(DestroyRef);
  readonly #vcr = inject(ViewContainerRef);
  readonly #cdr = inject(ChangeDetectorRef);
  readonly #template = inject(TemplateRef<any>);
  readonly #elementsLoaderService = inject(LazyElementsLoaderService);

  readonly url = input<string | null>(null, { alias: 'axLazyElement' });
  readonly loadingTemplateRef = input<TemplateRef<any> | null>(null, {
    alias: 'axLazyElementLoadingTemplate',
  });
  readonly errorTemplateRef = input<TemplateRef<any> | null>(null, {
    alias: 'axLazyElementErrorTemplate',
  });
  readonly isModule = input<boolean>(undefined, {
    alias: 'axLazyElementModule',
  });
  readonly importMap = input(false, { alias: 'axLazyElementImportMap' });
  readonly loadingSuccess = input<() => void>(undefined, {
    alias: 'axLazyElementLoadingSuccess',
  });
  readonly loadingError = input<(error: ErrorEvent) => void>(undefined, {
    alias: 'axLazyElementLoadingError',
  });

  #viewRef: EmbeddedViewRef<any> | null = null;
  #url$ = toObservable(this.url);

  ngOnInit() {
    // There's no sense to execute the below logic on the Node.js side since the JavaScript
    // will not be loaded on the server-side (Angular will only append the script to body).
    // The `loadElement` promise will never be resolved, since it gets resolved when the `load` event is emitted.
    // `customElements` are also undefined on the Node.js side; thus, it will always render the error template.
    if (isPlatformServer(this.#platformId)) {
      return;
    }

    this.#setupUrlListener();
  }

  destroyEmbeddedView() {
    if (this.#viewRef && !this.#viewRef.destroyed) {
      this.#viewRef.detach();
      this.#viewRef.destroy();
      this.#viewRef = null;
    }
  }

  #setupUrlListener(): void {
    const tpl = this.#template as any;
    const elementTag = tpl._declarationTContainer
      ? tpl._declarationTContainer.tagName || tpl._declarationTContainer.value
      : tpl._def.element.#template.nodes[0].element.name;

    const elementConfig =
      this.#elementsLoaderService.getElementConfig(elementTag) ||
      ({} as ElementConfig);
    const options = this.#elementsLoaderService.options;
    const loadingComponent =
      elementConfig.loadingComponent || options.loadingComponent;

    this.#url$
      .pipe(
        // This is used to coalesce changes since the `url$` subject might emit multiple values initially, e.g.
        // `null` (initial value) and the url itself (when the `url` binding is provided).
        // The `animationFrameScheduler` is used to prevent the frame drop.
        debounceTime(0, animationFrameScheduler),
        switchMap((url) => {
          const loadingTemplateRef = this.loadingTemplateRef();
          if (loadingTemplateRef) {
            this.#vcr.createEmbeddedView(loadingTemplateRef);
          } else if (loadingComponent) {
            this.#vcr.createComponent(loadingComponent);
          }

          return from(
            this.#elementsLoaderService.loadElement(
              url,
              elementTag,
              this.isModule(),
              this.importMap(),
              elementConfig?.hooks,
            ),
          ).pipe(
            catchError((error) => {
              this.loadingError()?.(error);
              this.#vcr.clear();
              const errorComponent =
                elementConfig.errorComponent || options.errorComponent;
              const errorTemplateRef = this.errorTemplateRef();
              if (errorTemplateRef) {
                this.#vcr.createEmbeddedView(errorTemplateRef);
                this.#cdr.markForCheck();
              } else if (errorComponent) {
                this.#vcr.createComponent(errorComponent);
                this.#cdr.markForCheck();
              } else if (ngDevMode && !this.loadingError()) {
                console.error(
                  `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`,
                );
              }
              return EMPTY;
            }),
          );
        }),
        tap(() => this.loadingSuccess()?.()),
        mergeMap(() => customElements.whenDefined(elementTag)),
        takeUntilDestroyed(this.#destroyRef),
      )
      .subscribe({
        next: () => {
          this.#vcr.clear();
          this.#viewRef = this.#vcr.createEmbeddedView(this.#template);
          this.#cdr.markForCheck();
        },
      });
  }
}
