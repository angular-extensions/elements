import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContributeComponent } from './contribute/contribute.component';

const routes: Routes = [{ path: '', component: ContributeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContributeRoutingModule {}
