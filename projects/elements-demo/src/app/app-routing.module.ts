import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('./features/docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./features/examples/examples.module').then(m => m.ExamplesModule)
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
export class AppRoutingModule {}
