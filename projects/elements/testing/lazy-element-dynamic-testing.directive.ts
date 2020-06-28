import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[axLazyElementDynamic]',
})
export class LazyElementDynamicTestingDirective implements OnInit {
  constructor(
    private vcr: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit() {
    this.vcr.createEmbeddedView(this.template);
  }
}
