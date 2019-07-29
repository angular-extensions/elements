import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DocsComponent,
    children: [
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
        path: 'use-cases',
        loadChildren: () =>
          import('./use-cases/use-cases.module').then(m => m.UseCasesModule)
      },
      {
        path: 'api',
        loadChildren: () => import('./api/api.module').then(m => m.ApiModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.module').then(m => m.FaqModule)
      },
      {
        path: 'change-detection',
        loadChildren: () =>
          import('./change-detection/change-detection.module').then(
            m => m.ChangeDetectionModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
