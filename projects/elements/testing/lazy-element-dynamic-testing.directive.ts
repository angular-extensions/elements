import {
  Directive,
  inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[axLazyElementDynamic]',
})
export class LazyElementDynamicTestingDirective implements OnInit {
  readonly #vcr = inject(ViewContainerRef);
  readonly #template = inject(TemplateRef<any>);

  ngOnInit() {
    this.#vcr.createEmbeddedView(this.#template);
  }
}
