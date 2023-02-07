import {
  Directive,
  inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[axLazyElementDynamic]',
})
export class LazyElementDynamicTestingDirective implements OnInit {
  private readonly vcr = inject(ViewContainerRef);
  private readonly template = inject(TemplateRef<any>);

  ngOnInit() {
    this.vcr.createEmbeddedView(this.template);
  }
}
