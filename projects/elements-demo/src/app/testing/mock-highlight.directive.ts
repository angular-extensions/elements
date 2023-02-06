import { Directive, Input } from '@angular/core';

@Directive({
  standalone: true,
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[highlight]',
})
export class MockHighlightDirective {
  @Input() highlight: any;
}
