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
        loadChildren:
          './getting-started/getting-started.module#GettingStartedModule'
      },
      {
        path: 'how-it-works',
        loadChildren: './how-it-works/how-it-works.module#HowItWorksModule'
      },
      {
        path: 'use-cases',
        loadChildren: './use-cases/use-cases.module#UseCasesModule'
      },
      {
        path: 'api',
        loadChildren: './api/api.module#ApiModule'
      },
      {
        path: 'faq',
        loadChildren: './faq/faq.module#FaqModule'
      },
      {
        path: 'change-detection',
        loadChildren:
          './change-detection/change-detection.module#ChangeDetectionModule'
      },
      {
        path: 'configuration',
        loadChildren: './configuration/configuration.module#ConfigurationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {}
