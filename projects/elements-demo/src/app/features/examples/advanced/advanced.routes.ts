import { Routes } from '@angular/router';
import {
  ElementConfig,
  LAZY_ELEMENT_CONFIGS,
  provideAxLazyElementsConfigs,
} from '@angular-extensions/elements';

import { AdvancedComponent } from './advanced.component';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ErrorComponent } from '../../../shared/error/error.component';

export function beforeLoadHook(tag: string): Promise<void> {
  alert(
    `Starting download of ${tag} web component! The download will be artificially postponed for 5 seconds.`,
  );
  return new Promise((res) => setTimeout(res, 5000));
}

export function elementConfigsFactory(): ElementConfig[] {
  return [
    {
      tag: 'wired-toggle',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
      loadingComponent: SpinnerComponent,
      errorComponent: ErrorComponent,
    },
  ];
}

const configs: ElementConfig[] = [
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
    loadingComponent: SpinnerComponent,
    errorComponent: ErrorComponent,
    preload: true,
  },
  {
    tag: 'mwc-switch',
    url: 'https://unpkg.com/@material/mwc-switch@0.27.0/mwc-switch.js?module',
    isModule: true,
  },
  {
    tag: 'mwc-checkbox',
    url: 'https://unpkg.com/@material/mwc-checkbox@0.27.0/mwc-checkbox.js?module',
    isModule: true,
  },
  {
    tag: 'mwc-fab',
    url: 'https://unpkg.com/@material/mwc-fab@0.27.0/mwc-fab.js?module',
    isModule: true,
    loadingComponent: SpinnerComponent,
  },
  {
    tag: 'mwc-slider',
    url: 'https://unpkg.com/@material/mwc-slider@0.14.1/mwc-slider.js?module',
    isModule: true,
    hooks: {
      beforeLoad: beforeLoadHook,
    },
  },
];

export default <Routes>[
  {
    path: '',
    providers: [
      provideAxLazyElementsConfigs(configs),
      {
        provide: LAZY_ELEMENT_CONFIGS,
        useFactory: elementConfigsFactory,
        multi: true,
      },
    ],
    children: [
      {
        path: '',
        component: AdvancedComponent,
      },
    ],
  },
];
