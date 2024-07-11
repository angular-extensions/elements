import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'docs',
    loadChildren: () => import('./features/docs/docs.routes'),
  },
  {
    path: 'examples',
    loadChildren: () => import('./features/examples/examples.routes'),
  },
  {
    path: 'contribute',
    loadChildren: () => import('./features/contribute/contribute.routes'),
  },
  {
    path: 'changelog',
    loadChildren: () => import('./features/changelog/changelog.routes'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
