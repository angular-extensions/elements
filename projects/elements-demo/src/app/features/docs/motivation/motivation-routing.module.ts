import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotivationComponent } from './motivation.component';

const routes: Routes = [{ path: '', component: MotivationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotivationRoutingModule {}
