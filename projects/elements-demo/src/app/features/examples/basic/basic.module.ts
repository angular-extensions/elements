import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../../../shared/shared.module';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BasicComponent],
  imports: [HighlightModule, SharedModule, BasicRoutingModule]
})
export class BasicModule {}
