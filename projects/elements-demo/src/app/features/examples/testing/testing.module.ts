import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementsModule } from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { SharedModule } from '../../../shared/shared.module';

import { TestingRoutingModule } from './testing-routing.module';
import { TestingComponent } from './testing.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TestingComponent],
  imports: [
    HighlightModule,
    LazyElementsModule,
    SharedModule,
    TestingRoutingModule
  ]
})
export class TestingModule {}
