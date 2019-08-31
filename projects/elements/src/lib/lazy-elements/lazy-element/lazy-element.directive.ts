import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import {
  LazyElementsLoaderService,
  ElementConfig
} from '../lazy-elements-loader.service';

const LOG_PREFIX = '@angular-extensions/elements';

@Directive({
  selector: '[axLazyElement]'
})
export class LazyElementDirective implements OnInit {
  @Input('axLazyElement') url: string;
  @Input('axLazyElementLoadingTemplate') loadingTemplateRef: TemplateRef<any>; // tslint:disable-line:no-input-rename
  @Input('axLazyElementErrorTemplate') errorTemplateRef: TemplateRef<any>; // tslint:disable-line:no-input-rename
  @Input('axLazyElementModule') isModule: boolean | undefined; // tslint:disable-line:no-input-rename

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const elementTag = (this.template as any)._def.element.template.nodes[0]
      .element.name;

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
    this.elementsLoaderService
      .loadElement(this.url, elementTag, this.isModule)
      .then(() => {
        this.vcr.clear();
        this.vcr.createEmbeddedView(this.template);
      })
      .catch(() => {
        this.vcr.clear();
        const errorComponent =
          elementConfig.errorComponent || options.errorComponent;
        if (this.errorTemplateRef) {
          this.vcr.createEmbeddedView(this.errorTemplateRef);
        } else if (errorComponent) {
          const factory = this.cfr.resolveComponentFactory(errorComponent);
          this.vcr.createComponent(factory);
        } else {
          console.error(
            `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`
          );
        }
      });
  }
}
