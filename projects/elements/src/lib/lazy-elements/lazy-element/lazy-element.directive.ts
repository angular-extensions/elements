import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

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
    private elementsLoaderService: LazyElementsLoaderService
  ) {}

  ngOnInit() {
    const elementTag = (this.template as any)._def.element.template.nodes[0]
      .element.name;

    if (this.loadingTemplateRef) {
      this.vcr.createEmbeddedView(this.loadingTemplateRef);
    }

    this.elementsLoaderService
      .loadElement(this.url, elementTag, this.isModule)
      .then(() => {
        this.vcr.clear();
        this.vcr.createEmbeddedView(this.template);
      })
      .catch(() => {
        this.vcr.clear();
        if (this.errorTemplateRef) {
          this.vcr.createEmbeddedView(this.errorTemplateRef);
        } else {
          console.error(
            `${LOG_PREFIX} - Loading of element <${elementTag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element`
          );
        }
      });
  }
}
