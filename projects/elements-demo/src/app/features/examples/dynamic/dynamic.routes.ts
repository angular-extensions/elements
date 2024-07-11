import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import {
  ElementConfig,
  provideAxLazyElementsConfigs,
} from '@angular-extensions/elements';

import { DynamicComponent } from './dynamic.component';

const configs: ElementConfig[] = [
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
  },
];

export default <Routes>[
  {
    providers: [provideAxLazyElementsConfigs(configs)],
    path: '',
    children: [
      {
        path: '',
        component: DynamicComponent,
      },
    ],
  },
];
