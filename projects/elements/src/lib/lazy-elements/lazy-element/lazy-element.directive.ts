import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

@Directive({
  selector: '[axLazyElement]'
})
export class LazyElementDirective implements OnInit {
  @Input('axLazyElement') url: string;
  @Input('axLazyElementLoading') loadingTemplateRef: TemplateRef<any>; // tslint:disable-line:no-input-rename

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService
  ) {}

  ngOnInit() {
    const elementTag = (this.template as any)._def.element.template.nodes[0].element.name;

    if (this.loadingTemplateRef) {
      this.vcr.createEmbeddedView(this.loadingTemplateRef);
    }

    this.elementsLoaderService.loadElement(this.url, elementTag).then(() => {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.template);
    });
  }
}
