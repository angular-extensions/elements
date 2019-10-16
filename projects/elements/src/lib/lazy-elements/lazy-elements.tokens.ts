import { InjectionToken } from '@angular/core';

import { ElementConfig } from './lazy-elements-loader.service';
import {
  LazyElementModuleOptions,
  LazyElementModuleRootOptions,
  LazyElementRootOptions
} from './lazy-elements.module';

export const LAZY_ELEMENT_CONFIGS = new InjectionToken<ElementConfig[]>(
  'LAZY_ELEMENT_CONFIGS'
);

export const LAZY_ELEMENT_ROOT_OPTIONS = new InjectionToken<
  LazyElementRootOptions
>('LAZY_ELEMENT_ROOT_OPTIONS');

export const LAZY_ELEMENT_ROOT_GUARD = new InjectionToken<void>(
  'LAZY_ELEMENT_ROOT_GUARD'
);

export const LAZY_ELEMENT_MODULE_OPTIONS = new InjectionToken<
  LazyElementModuleOptions
>('LAZY_ELEMENT_MODULE_OPTIONS');

export const LAZY_ELEMENT_MODULE_ROOT_OPTIONS = new InjectionToken<
  LazyElementModuleRootOptions
>('LAZY_ELEMENT_MODULE_ROOT_OPTIONS');
