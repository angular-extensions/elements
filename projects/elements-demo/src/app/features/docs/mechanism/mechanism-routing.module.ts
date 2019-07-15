import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MechanismComponent } from './mechanism.component';

const routes: Routes = [{ path: '', component: MechanismComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechanismRoutingModule {}
