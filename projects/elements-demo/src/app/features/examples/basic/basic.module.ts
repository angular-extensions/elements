import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementsModule } from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { SharedModule } from '../../../shared/shared.module';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BasicComponent],
  imports: [
    HighlightModule,
    LazyElementsModule,
    SharedModule,
    BasicRoutingModule,
  ],
})
export class BasicModule {}
