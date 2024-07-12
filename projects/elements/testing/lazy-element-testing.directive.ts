import {
  Directive,
  inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[axLazyElement]',
})
export class LazyElementTestingDirective implements OnInit {
  readonly #vcr = inject(ViewContainerRef);
  readonly #template = inject(TemplateRef<any>);

  ngOnInit() {
    this.#vcr.createEmbeddedView(this.#template);
  }
}
