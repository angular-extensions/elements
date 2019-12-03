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
        loadChildren: './basic/basic.module#BasicModule'
      },
      {
        path: 'advanced',
        loadChildren: './advanced/advanced.module#AdvancedModule'
      },
      {
        path: 'dynamic',
        loadChildren: './dynamic/dynamic.module#DynamicModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule {}
