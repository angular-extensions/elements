import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  EmbeddedViewRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
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
} from 'rxjs';
import { catchError, debounceTime, mergeMap, switchMap } from 'rxjs/operators';

import {
  ElementConfig,
  LazyElementsLoaderService,
} from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  selector: '[axLazyElement]',
})
export class LazyElementDirective implements OnInit, OnDestroy {
  @Input('axLazyElement')
  set url(url: string) {
    this.url$.next(url);
  }

  @Input('axLazyElementLoadingTemplate') loadingTemplateRef: TemplateRef<any>; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementErrorTemplate') errorTemplateRef: TemplateRef<any>; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementModule') isModule: boolean | undefined; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementImportMap') importMap: boolean | undefined; // eslint-disable-line @angular-eslint/no-input-rename

  private viewRef: EmbeddedViewRef<any> = null;
  private subscription = Subscription.EMPTY;
  private url$ = new BehaviorSubject<string | null>(null);

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

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
            const factory = this.cfr.resolveComponentFactory(loadingComponent);
            this.vcr.createComponent(factory);
          }

          return from(
            this.elementsLoaderService.loadElement(
              url,
              elementTag,
              this.isModule,
              this.importMap,
              elementConfig?.hooks
            )
          ).pipe(
            catchError(() => {
              this.vcr.clear();
              const errorComponent =
                elementConfig.errorComponent || options.errorComponent;
              if (this.errorTemplateRef) {
                this.vcr.createEmbeddedView(this.errorTemplateRef);
                this.cdr.markForCheck();
              } else if (errorComponent) {
                const factory =
                  this.cfr.resolveComponentFactory(errorComponent);
                this.vcr.createComponent(factory);
                this.cdr.markForCheck();
              } else if (ngDevMode) {
                console.error(
                  `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`
                );
              }
              return EMPTY;
            })
          );
        }),
        mergeMap(() => customElements.whenDefined(elementTag))
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
