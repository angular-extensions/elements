import {
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  EmbeddedViewRef,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { from, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import {
  ElementConfig,
  LazyElementsLoaderService,
} from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  selector: '[axLazyElement]',
})
export class LazyElementDirective implements OnInit, OnDestroy {
  @Input('axLazyElement') url: string;
  @Input('axLazyElementLoadingTemplate') loadingTemplateRef: TemplateRef<any>; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementErrorTemplate') errorTemplateRef: TemplateRef<any>; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementModule') isModule: boolean | undefined; // eslint-disable-line @angular-eslint/no-input-rename
  @Input('axLazyElementImportMap') importMap: boolean | undefined; // eslint-disable-line @angular-eslint/no-input-rename

  private viewRef: EmbeddedViewRef<any> = null;
  private subscription = Subscription.EMPTY;

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService,
    private cfr: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
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

    if (this.loadingTemplateRef) {
      this.vcr.createEmbeddedView(this.loadingTemplateRef);
    } else if (loadingComponent) {
      const factory = this.cfr.resolveComponentFactory(loadingComponent);
      this.vcr.createComponent(factory);
    }

    const loadElement$ = from(
      this.elementsLoaderService.loadElement(
        this.url,
        elementTag,
        this.isModule,
        this.importMap,
        elementConfig?.hooks
      )
    );

    this.subscription = loadElement$
      .pipe(mergeMap(() => customElements.whenDefined(elementTag)))
      .subscribe({
        next: () => {
          this.vcr.clear();
          this.viewRef = this.vcr.createEmbeddedView(this.template);
          this.cdr.markForCheck();
        },
        error: () => {
          this.vcr.clear();
          const errorComponent =
            elementConfig.errorComponent || options.errorComponent;
          if (this.errorTemplateRef) {
            this.vcr.createEmbeddedView(this.errorTemplateRef);
            this.cdr.markForCheck();
          } else if (errorComponent) {
            const factory = this.cfr.resolveComponentFactory(errorComponent);
            this.vcr.createComponent(factory);
            this.cdr.markForCheck();
          } else {
            console.error(
              `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`
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
