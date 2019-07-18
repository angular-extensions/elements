import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BasicComponent],
  imports: [SharedModule, BasicRoutingModule]
})
export class BasicModule {}
