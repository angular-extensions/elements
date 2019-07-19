import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'motivation',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'motivation',
        loadChildren: () =>
          import('./motivation/motivation.module').then(m => m.MotivationModule)
      },
      {
        path: 'getting-started',
        loadChildren: () =>
          import('./getting-started/getting-started.module').then(
            m => m.GettingStartedModule
          )
      },
      {
        path: 'how-it-works',
        loadChildren: () =>
          import('./how-it-works/how-it-works.module').then(
            m => m.HowItWorksModule
          )
      },
      {
        path: 'api',
        loadChildren: () => import('./api/api.module').then(m => m.ApiModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
