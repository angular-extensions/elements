import { importProvidersFrom } from '@angular/core';
import { Routes } from '@angular/router';
import {
  LazyElementModuleOptions,
  LazyElementsModule,
} from '@angular-extensions/elements';

import { DynamicComponent } from './dynamic.component';

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'wired-button',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
    },
  ],
};

export default <Routes>[
  {
    path: '',
    component: DynamicComponent,
    providers: [importProvidersFrom(LazyElementsModule.forFeature(options))],
  },
];
