import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  Optional,
  SkipSelf,
} from '@angular/core';

import {
  ElementConfig,
  LazyElementOptions,
  LazyElementRootOptions,
} from './lazy-elements.interface';
import {
  LAZY_ELEMENT_CONFIGS,
  LAZY_ELEMENT_ROOT_OPTIONS,
  LAZY_ELEMENT_ROOT_GUARD,
} from './lazy-elements.tokens';
import { LazyElementsLoaderService } from './lazy-elements-loader.service';

export function createProvideLazyElementsGuard(
  rootOptions: LazyElementRootOptions,
) {
  if (ngDevMode && rootOptions) {
    throw new TypeError(
      `provideAxLazyElements() called twice. Lazy feature modules should use provideAxLazyElementsConfigs() instead.`,
    );
  }
  return 'provideAxLazyElements() multiple execution guard';
}

export function provideAxLazyElements(
  options: LazyElementOptions = {},
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: LAZY_ELEMENT_CONFIGS,
      useValue: options && options.elementConfigs ? options.elementConfigs : [],
      multi: true,
    },
    {
      provide: LAZY_ELEMENT_ROOT_OPTIONS,
      useValue: options.rootOptions ? options.rootOptions : {},
    },
    {
      provide: LAZY_ELEMENT_ROOT_GUARD,
      useFactory: createProvideLazyElementsGuard,
      deps: [[LAZY_ELEMENT_ROOT_OPTIONS, new Optional(), new SkipSelf()]],
    },
    {
      multi: true,
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        inject(LAZY_ELEMENT_ROOT_GUARD, { optional: true });

        const lazyElementsLoaderService = inject(LazyElementsLoaderService);
        const elementConfigsMultiProvider = inject<ElementConfig[][]>(
          LAZY_ELEMENT_CONFIGS,
          { optional: true },
        );

        if (elementConfigsMultiProvider && elementConfigsMultiProvider.length) {
          elementConfigsMultiProvider
            .filter((configs) => configs.some((config) => !config.isAdded))
            .forEach((configs) =>
              lazyElementsLoaderService.addConfigs(configs),
            );
        }
      },
    },
  ]);
}

export function provideAxLazyElementsConfigs(configs: ElementConfig[] = []) {
  return makeEnvironmentProviders([
    {
      provide: LAZY_ELEMENT_CONFIGS,
      useValue: configs && configs.length ? configs : [],
      multi: true,
    },
    {
      multi: true,
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        inject(LAZY_ELEMENT_ROOT_GUARD, { optional: true });

        const lazyElementsLoaderService = inject(LazyElementsLoaderService);
        const elementConfigsMultiProvider = inject<ElementConfig[][]>(
          LAZY_ELEMENT_CONFIGS,
          { optional: true },
        );

        if (elementConfigsMultiProvider && elementConfigsMultiProvider.length) {
          elementConfigsMultiProvider
            .filter((configs) => configs.some((config) => !config.isAdded))
            .forEach((configs) =>
              lazyElementsLoaderService.addConfigs(configs),
            );
        }
      },
    },
  ]);
}
