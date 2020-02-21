import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamplesComponent } from './examples.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: 'basic',
        loadChildren: () =>
          import('./basic/basic.module').then(m => m.BasicModule)
      },
      {
        path: 'advanced',
        loadChildren: () =>
          import('./advanced/advanced.module').then(m => m.AdvancedModule)
      },
      {
        path: 'dynamic',
        loadChildren: () =>
          import('./dynamic/dynamic.module').then(m => m.DynamicModule)
      },
      {
        path: 'testing',
        loadChildren: () =>
          import('./testing/testing.module').then(m => m.TestingModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
