import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementsModule } from '@angular-extensions/elements';

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
