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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
