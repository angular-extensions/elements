import {
  ChangeDetectorRef,
  Directive,
  EmbeddedViewRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';
import {
  animationFrameScheduler,
  BehaviorSubject,
  EMPTY,
  from,
  Subscription,
  catchError,
  debounceTime,
  mergeMap,
  switchMap,
} from 'rxjs';

import { ElementConfig } from '../lazy-elements.interface';
import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  selector: '[axLazyElement]',
})
export class LazyElementDirective implements OnChanges, OnInit, OnDestroy {
  @Input('axLazyElement') url: string | null = null;
  @Input('axLazyElementLoadingTemplate') // eslint-disable-line @angular-eslint/no-input-rename
  loadingTemplateRef: TemplateRef<any> | null = null;
  @Input('axLazyElementErrorTemplate') // eslint-disable-line @angular-eslint/no-input-rename
  errorTemplateRef: TemplateRef<any> | null = null;
  @Input('axLazyElementModule') isModule?: boolean; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementImportMap') importMap = false; // eslint-disable-line @angular-eslint/no-input-rename

  private viewRef: EmbeddedViewRef<any> | null = null;
  private subscription = Subscription.EMPTY;
  private url$ = new BehaviorSubject<string | null>(null);

  private readonly platformId = inject(PLATFORM_ID);
  private readonly vcr = inject(ViewContainerRef);
  private readonly template = inject(TemplateRef<any>);
  private readonly elementsLoaderService = inject(LazyElementsLoaderService);
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this.url$.next(this.url);
    }
  }

  ngOnInit() {
    // There's no sense to execute the below logic on the Node.js side since the JavaScript
    // will not be loaded on the server-side (Angular will only append the script to body).
    // The `loadElement` promise will never be resolved, since it gets resolved when the `load` event is emitted.
    // `customElements` are also undefined on the Node.js side; thus, it will always render the error template.
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.setupUrlListener();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  destroyEmbeddedView() {
    if (this.viewRef && !this.viewRef.destroyed) {
      this.viewRef.detach();
      this.viewRef.destroy();
      this.viewRef = null;
    }
  }

  private setupUrlListener(): void {
    const tpl = this.template as any;
    const elementTag = tpl._declarationTContainer
      ? tpl._declarationTContainer.tagName || tpl._declarationTContainer.value
      : tpl._def.element.template.nodes[0].element.name;

    const elementConfig =
      this.elementsLoaderService.getElementConfig(elementTag) ||
      ({} as ElementConfig);
    const options = this.elementsLoaderService.options;
    const loadingComponent =
      elementConfig.loadingComponent || options.loadingComponent;

    this.subscription = this.url$
      .pipe(
        // This is used to coalesce changes since the `url$` subject might emit multiple values initially, e.g.
        // `null` (initial value) and the url itself (when the `url` binding is provided).
        // The `animationFrameScheduler` is used to prevent the frame drop.
        debounceTime(0, animationFrameScheduler),
        switchMap((url) => {
          if (this.loadingTemplateRef) {
            this.vcr.createEmbeddedView(this.loadingTemplateRef);
          } else if (loadingComponent) {
            this.vcr.createComponent(loadingComponent);
          }

          return from(
            this.elementsLoaderService.loadElement(
              url,
              elementTag,
              this.isModule,
              this.importMap,
              elementConfig?.hooks,
            ),
          ).pipe(
            catchError(() => {
              this.vcr.clear();
              const errorComponent =
                elementConfig.errorComponent || options.errorComponent;
              if (this.errorTemplateRef) {
                this.vcr.createEmbeddedView(this.errorTemplateRef);
                this.cdr.markForCheck();
              } else if (errorComponent) {
                this.vcr.createComponent(errorComponent);
                this.cdr.markForCheck();
              } else if (ngDevMode) {
                console.error(
                  `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`,
                );
              }
              return EMPTY;
            }),
          );
        }),
        mergeMap(() => customElements.whenDefined(elementTag)),
      )
      .subscribe({
        next: () => {
          this.vcr.clear();
          this.viewRef = this.vcr.createEmbeddedView(this.template);
          this.cdr.markForCheck();
        },
      });
  }
}
