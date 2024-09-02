import {
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  EmbeddedViewRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  output,
  PLATFORM_ID,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
export class LazyElementDirective implements OnInit, OnChanges {
  readonly #platformId = inject(PLATFORM_ID);
  readonly #destroyRef = inject(DestroyRef);
  readonly #vcr = inject(ViewContainerRef);
  readonly #cdr = inject(ChangeDetectorRef);
  readonly #template = inject(TemplateRef<any>);
  readonly #elementsLoaderService = inject(LazyElementsLoaderService);

  @Input('axLazyElement') url: string | null = null;
  @Input('axLazyElementLoadingTemplate') // eslint-disable-line @angular-eslint/no-input-rename
  loadingTemplateRef: TemplateRef<any> | null = null;
  @Input('axLazyElementErrorTemplate') // eslint-disable-line @angular-eslint/no-input-rename
  errorTemplateRef: TemplateRef<any> | null = null;
  @Input('axLazyElementModule') isModule?: boolean; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementImportMap') importMap = false; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementLoadingSuccess') loadingSuccess?: () => void;
  @Input('axLazyElementLoadingError') loadingError?: (
    error: ErrorEvent,
  ) => void;

  #viewRef: EmbeddedViewRef<any> | null = null;
  #url$ = new BehaviorSubject<string | null>(null);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this.#url$.next(this.url);
    }
  }

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
    console.log(tpl);
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
          if (this.loadingTemplateRef) {
            this.#vcr.createEmbeddedView(this.loadingTemplateRef);
          } else if (loadingComponent) {
            this.#vcr.createComponent(loadingComponent);
          }

          return from(
            this.#elementsLoaderService.loadElement(
              url,
              elementTag,
              this.isModule,
              this.importMap,
              elementConfig?.hooks,
            ),
          ).pipe(
            catchError((error) => {
              this.loadingError?.(error);
              this.#vcr.clear();
              const errorComponent =
                elementConfig.errorComponent || options.errorComponent;
              if (this.errorTemplateRef) {
                this.#vcr.createEmbeddedView(this.errorTemplateRef);
                this.#cdr.markForCheck();
              } else if (errorComponent) {
                this.#vcr.createComponent(errorComponent);
                this.#cdr.markForCheck();
              } else if (ngDevMode && !this.loadingError) {
                console.error(
                  `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`,
                );
              }
              return EMPTY;
            }),
          );
        }),
        tap(() => this.loadingSuccess?.()),
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
