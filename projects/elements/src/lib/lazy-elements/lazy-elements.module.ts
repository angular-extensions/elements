import {
  inject,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import {
  ElementConfig,
  LazyElementModuleOptions,
  LazyElementModuleRootOptions,
  LazyElementRootOptions,
} from './lazy-elements.interface';
import {
  LAZY_ELEMENT_CONFIGS,
  LAZY_ELEMENT_ROOT_GUARD,
  LAZY_ELEMENT_ROOT_OPTIONS,
} from './lazy-elements.tokens';
import { LazyElementDirective } from './lazy-element/lazy-element.directive';
import { LazyElementDynamicDirective } from './lazy-element-dynamic/lazy-element-dynamic.directive';
import { LazyElementsLoaderService } from './lazy-elements-loader.service';

import './ng-dev-mode';

export function createLazyElementRootGuard(
  rootOptions: LazyElementRootOptions,
) {
  if (ngDevMode && rootOptions) {
    throw new TypeError(
      `LazyElementsModule.forRoot() called twice. Lazy feature modules should use LazyElementsModule.forFeature() instead.`,
    );
  }
  return 'LazyElementsModule.forRoot() multiple execution guard';
}

@NgModule({
  imports: [LazyElementDirective, LazyElementDynamicDirective],
  exports: [LazyElementDirective, LazyElementDynamicDirective],
})
export class LazyElementsModule {
  static forRoot(
    options: LazyElementModuleRootOptions,
  ): ModuleWithProviders<LazyElementsModule> {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useValue:
            options && options.elementConfigs ? options.elementConfigs : [],
          multi: true,
        },
        {
          provide: LAZY_ELEMENT_ROOT_OPTIONS,
          useValue: options.rootOptions ? options.rootOptions : {},
        },
        {
          provide: LAZY_ELEMENT_ROOT_GUARD,
          useFactory: createLazyElementRootGuard,
          deps: [[LAZY_ELEMENT_ROOT_OPTIONS, new Optional(), new SkipSelf()]],
        },
      ],
    };
  }

  static forFeature(
    options: LazyElementModuleOptions,
  ): ModuleWithProviders<LazyElementsModule> {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useValue:
            options && options.elementConfigs ? options.elementConfigs : [],
          multi: true,
        },
      ],
    };
  }

  readonly lazyElementsLoaderService = inject(LazyElementsLoaderService);
  readonly elementConfigsMultiProvider = inject<ElementConfig[][]>(
    LAZY_ELEMENT_CONFIGS,
    { optional: true },
  );
  readonly guard = inject(LAZY_ELEMENT_ROOT_GUARD, { optional: true });

  constructor() {
    if (
      this.elementConfigsMultiProvider &&
      this.elementConfigsMultiProvider.length
    ) {
      this.elementConfigsMultiProvider
        .filter((configs) => configs.some((config) => !config.isAdded))
        .forEach((configs) =>
          this.lazyElementsLoaderService.addConfigs(configs),
        );
    }
  }
}
