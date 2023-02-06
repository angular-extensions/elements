import { InjectionToken } from '@angular/core';

import {
  ElementConfig,
  LazyElementRootOptions,
  LazyElementsRegistry,
} from './lazy-elements.interface';

export const LAZY_ELEMENT_CONFIGS = new InjectionToken<ElementConfig[]>(
  'LAZY_ELEMENT_CONFIGS'
);

export const LAZY_ELEMENT_ROOT_OPTIONS =
  new InjectionToken<LazyElementRootOptions>('LAZY_ELEMENT_ROOT_OPTIONS');

export const LAZY_ELEMENT_ROOT_GUARD = new InjectionToken<void>(
  'LAZY_ELEMENT_ROOT_GUARD'
);

export const LAZY_ELEMENTS_REGISTRY = new InjectionToken<LazyElementsRegistry>(
  'LAZY_ELEMENTS_REGISTRY',
  {
    providedIn: 'root',
    factory: () => new Map<string, Promise<void>>(),
  }
);
