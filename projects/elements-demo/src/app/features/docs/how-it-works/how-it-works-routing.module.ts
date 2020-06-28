import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowItWorksComponent } from './how-it-works.component';

const routes: Routes = [{ path: '', component: HowItWorksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowItWorksRoutingModule {}
