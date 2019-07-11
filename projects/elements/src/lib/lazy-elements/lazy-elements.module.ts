import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyElementDirective } from './lazy-element/lazy-element.directive';

@NgModule({
  declarations: [LazyElementDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective]
})
export class LazyElementsModule {}
