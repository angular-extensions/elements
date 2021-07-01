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
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';
import { from, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import {
  ElementConfig,
  LazyElementsLoaderService,
} from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  selector: '[axLazyElementDynamic]',
})
export class LazyElementDynamicDirective implements OnInit, OnDestroy {
  @Input('axLazyElementDynamic') tag: string | null = null;
  @Input('axLazyElementDynamicUrl') url: string | null = null; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementDynamicLoadingTemplate') // eslint-disable-line @angular-eslint/no-input-rename
  loadingTemplateRef: TemplateRef<any> | null = null;
  @Input('axLazyElementDynamicErrorTemplate') // eslint-disable-line @angular-eslint/no-input-rename
  errorTemplateRef: TemplateRef<any> | null = null;
  @Input('axLazyElementDynamicModule') isModule = false; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementDynamicImportMap') importMap = false; // eslint-disable-line @angular-eslint/no-input-rename

  private viewRef: EmbeddedViewRef<any> | null = null;
  private subscription = Subscription.EMPTY;

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService
  ) {}

  ngOnInit() {
    // There's no sense to execute the below logic on the Node.js side since the JavaScript
    // will not be loaded on the server-side (Angular will only append the script to body).
    // The `loadElement` promise will never be resolved, since it gets resolved when the `load` event is emitted.
    // `customElements` are also undefined on the Node.js side; thus, it will always render the error template.
    if (isPlatformServer(this.platformId)) {
      return;
    }

    if (ngDevMode) {
      if (!this.tag || this.tag.length === 0 || !this.tag.includes('-')) {
        throw new Error(
          `${LOG_PREFIX} - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${this.tag}"`
        );
      }
    }

    const tag = this.tag!;

    const elementConfig =
      this.elementsLoaderService.getElementConfig(tag) || ({} as ElementConfig);
    const options = this.elementsLoaderService.options;
    const loadingComponent =
      elementConfig.loadingComponent || options.loadingComponent;

    if (this.loadingTemplateRef) {
      this.vcr.createEmbeddedView(this.loadingTemplateRef);
    } else if (loadingComponent) {
      const factory = this.cfr.resolveComponentFactory(loadingComponent);
      this.vcr.createComponent(factory);
    }

    const loadElement$ = from(
      this.elementsLoaderService.loadElement(
        this.url,
        tag,
        this.isModule,
        this.importMap,
        elementConfig?.hooks
      )
    );

    this.subscription = loadElement$
      .pipe(mergeMap(() => customElements.whenDefined(tag)))
      .subscribe({
        next: () => {
          this.vcr.clear();
          const originalCreateElement = this.renderer.createElement;
          this.renderer.createElement = (name: string, namespace: string) => {
            if (name === 'ax-lazy-element') {
              name = tag;
            }
            return this.document.createElement(name);
          };
          this.viewRef = this.vcr.createEmbeddedView(this.template);
          this.renderer.createElement = originalCreateElement;
          this.cdr.markForCheck();
        },
        error: (error) => {
          const errorComponent =
            elementConfig.errorComponent || options.errorComponent;
          this.vcr.clear();
          if (this.errorTemplateRef) {
            this.vcr.createEmbeddedView(this.errorTemplateRef);
            this.cdr.markForCheck();
          } else if (errorComponent) {
            const factory = this.cfr.resolveComponentFactory(errorComponent);
            this.vcr.createComponent(factory);
            this.cdr.markForCheck();
          } else if (ngDevMode) {
            console.error(
              `${LOG_PREFIX} - Loading of element <${this.tag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element\n\n`,
              error
            );
          }
        },
      });
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
}
