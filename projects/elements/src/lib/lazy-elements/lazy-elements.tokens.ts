import { InjectionToken } from '@angular/core';

import { ElementConfig } from './lazy-elements-loader.service';
import { LazyElementRootOptions } from './lazy-elements.module';

export const LAZY_ELEMENT_CONFIGS = new InjectionToken<ElementConfig[]>(
  'LAZY_ELEMENT_CONFIGS'
);

export const LAZY_ELEMENT_ROOT_OPTIONS = new InjectionToken<
  LazyElementRootOptions
>('LAZY_ELEMENT_ROOT_OPTIONS');
