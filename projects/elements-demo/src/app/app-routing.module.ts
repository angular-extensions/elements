import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home/home.component';
import { EagerComponent } from './features/eager/eager/eager.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'eager',
    component: EagerComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./features/lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
