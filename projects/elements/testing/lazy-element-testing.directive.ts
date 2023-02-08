import {
  Directive,
  inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[axLazyElement]',
})
export class LazyElementTestingDirective implements OnInit {
  private readonly vcr = inject(ViewContainerRef);
  private readonly template = inject(TemplateRef<any>);

  ngOnInit() {
    this.vcr.createEmbeddedView(this.template);
  }
}
