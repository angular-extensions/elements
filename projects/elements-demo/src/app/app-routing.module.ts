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
    loadChildren: './features/docs/docs.module#DocsModule'
  },
  {
    path: 'examples',
    loadChildren: './features/examples/examples.module#ExamplesModule'
  },
  {
    path: 'contribute',
    loadChildren: './features/contribute/contribute.module#ContributeModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 100]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
