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
    tag: 'sl-switch',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/switch/switch.js',
    isModule: true,
  },
  {
    tag: 'sl-checkbox',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/checkbox/checkbox.js',
    isModule: true,
  },
  {
    tag: 'sl-avatar',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/avatar/avatar.js',
    isModule: true,
    loadingComponent: SpinnerComponent,
  },
  {
    tag: 'sl-range',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/range/range.js',
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
