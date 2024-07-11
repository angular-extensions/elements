import { Routes } from '@angular/router';

import { ExamplesComponent } from './examples.component';

export default <Routes>[
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ExamplesComponent,
    children: [
      {
        path: 'basic',
        loadChildren: () => import('./basic/basic.routes'),
      },
      {
        path: 'advanced',
        loadChildren: () => import('./advanced/advanced.routes'),
      },
      {
        path: 'dynamic',
        loadChildren: () => import('./dynamic/dynamic.routes'),
      },
      {
        path: 'testing',
        loadChildren: () => import('./testing/testing.routes'),
      },
    ],
  },
];
