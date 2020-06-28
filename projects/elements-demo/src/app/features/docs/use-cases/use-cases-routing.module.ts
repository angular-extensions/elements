import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UseCasesComponent } from './use-cases.component';

const routes: Routes = [{ path: '', component: UseCasesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseCasesRoutingModule {}
