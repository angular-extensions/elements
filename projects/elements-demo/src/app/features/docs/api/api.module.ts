import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { ApiRoutingModule } from './api-routing.module';
import { ApiComponent } from './api.component';

@NgModule({
  declarations: [ApiComponent],
  imports: [SharedModule, ApiRoutingModule]
})
export class ApiModule {}
