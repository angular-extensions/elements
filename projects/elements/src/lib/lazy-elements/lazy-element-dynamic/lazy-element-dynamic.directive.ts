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
  selector: '[axLazyElementDynamic]'
})
export class LazyElementDynamicDirective implements OnInit {
  @Input('axLazyElementDynamic') tag: string;
  @Input('axLazyElementDynamicUrl') url: string; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicLoadingTemplate') loadingTemplateRef: TemplateRef<
    any
  >; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicErrorTemplate') errorTemplateRef: TemplateRef<
    any
  >; // tslint:disable-line:no-input-rename
  @Input('axLazyElementDynamicModule') isModule: boolean | undefined; // tslint:disable-line:no-input-rename

  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>,
    private elementsLoaderService: LazyElementsLoaderService
  ) {}

  ngOnInit() {
    if (!this.tag || this.tag.length === 0 || !this.tag.includes('-')) {
      throw new Error(
        `${LOG_PREFIX} - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "${this.tag}"`
      );
    }

    const host = (this.template as any)._def.element.template.nodes[0].element;
    host.name = this.tag;

    if (this.loadingTemplateRef) {
      this.vcr.createEmbeddedView(this.loadingTemplateRef);
    }

    this.elementsLoaderService
      .loadElement(this.url, this.tag, this.isModule)
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
            `${LOG_PREFIX} - Loading of element <${this.tag}> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElementDynamic="errorTemplate: error" to display customized error message in place of element`
          );
        }
      });
  }
}
