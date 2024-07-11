import { Routes } from '@angular/router';

import { DocsComponent } from './docs.component';

export default <Routes>[
  {
    path: '',
    redirectTo: 'getting-started',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DocsComponent,
    children: [
      {
        path: 'getting-started',
        loadChildren: () => import('./getting-started/getting-started.routes'),
      },
      {
        path: 'how-it-works',
        loadChildren: () => import('./how-it-works/how-it-works.routes'),
      },
      {
        path: 'use-cases',
        loadChildren: () => import('./use-cases/use-cases.routes'),
      },
      {
        path: 'api',
        loadChildren: () => import('./api/api.routes'),
      },
      {
        path: 'faq',
        loadChildren: () => import('./faq/faq.routes'),
      },
      {
        path: 'change-detection',
        loadChildren: () =>
          import('./change-detection/change-detection.routes'),
      },
      {
        path: 'configuration',
        loadChildren: () => import('./configuration/configuration.routes'),
      },
    ],
  },
];
