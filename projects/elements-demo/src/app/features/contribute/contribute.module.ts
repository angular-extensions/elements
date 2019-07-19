import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ContributeRoutingModule } from './contribute-routing.module';
import { ContributeComponent } from './contribute/contribute.component';

@NgModule({
  declarations: [ContributeComponent],
  imports: [SharedModule, ContributeRoutingModule]
})
export class ContributeModule {}
