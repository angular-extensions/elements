import { NgModule } from '@angular/core';

import { LazyElementTestingDirective } from './lazy-element-testing.directive';
import { LazyElementDynamicTestingDirective } from './lazy-element-dynamic-testing.directive';

@NgModule({
  declarations: [
    LazyElementTestingDirective,
    LazyElementDynamicTestingDirective
  ],
  exports: [LazyElementTestingDirective, LazyElementDynamicTestingDirective]
})
export class LazyElementsTestingModule {}
