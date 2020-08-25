import {
  NgModule,
  Optional,
  Inject,
  ModuleWithProviders,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Type,
  SkipSelf
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyElementDirective } from './lazy-element/lazy-element.directive';
import { LazyElementDynamicDirective } from './lazy-element-dynamic/lazy-element-dynamic.directive';
import {
  ElementConfig,
  LazyElementsLoaderService
} from './lazy-elements-loader.service';
import {
  LAZY_ELEMENT_ROOT_OPTIONS,
  LAZY_ELEMENT_CONFIGS,
  LAZY_ELEMENT_ROOT_GUARD,
  LAZY_ELEMENTS_REGISTRY,
  LazyElementsRegistry
} from './lazy-elements.tokens';

export { LAZY_ELEMENTS_REGISTRY, LazyElementsRegistry };

export function createLazyElementRootGuard(options: LazyElementModuleOptions) {
  if (options) {
    throw new TypeError(
      `LazyElementsModule.forRoot() called twice. Feature modules should use LazyElementsModule.forFeature() instead.`
    );
  }
  return 'guarded';
}

@NgModule({
  declarations: [LazyElementDirective, LazyElementDynamicDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective, LazyElementDynamicDirective],
  providers: []
})
export class LazyElementsModule {
  static forRoot(
    options: LazyElementModuleRootOptions
  ): ModuleWithProviders<LazyElementsModule> {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useValue:
            options && options.elementConfigs ? options.elementConfigs : [],
          multi: true
        },
        {
          provide: LAZY_ELEMENT_ROOT_OPTIONS,
          useValue: options.rootOptions ? options.rootOptions : {}
        },
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: options,
          multi: true
        },
        {
          provide: LAZY_ELEMENT_ROOT_GUARD,
          useFactory: createLazyElementRootGuard,
          deps: [[LAZY_ELEMENT_CONFIGS, new Optional(), new SkipSelf()]]
        }
      ]
    };
  }

  static forFeature(
    options: LazyElementModuleOptions
  ): ModuleWithProviders<LazyElementsModule> {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useValue:
            options && options.elementConfigs ? options.elementConfigs : [],
          multi: true
        },
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: options && options.elementConfigs,
          multi: true
        }
      ]
    };
  }

  constructor(
    lazyElementsLoaderService: LazyElementsLoaderService,
    @Optional()
    @Inject(LAZY_ELEMENT_CONFIGS)
    elementConfigsMultiProvider: ElementConfig[][],
    @Optional()
    @Inject(LAZY_ELEMENT_ROOT_GUARD)
    guard: any
  ) {
    if (elementConfigsMultiProvider && elementConfigsMultiProvider.length) {
      const lastAddedConfigs =
        elementConfigsMultiProvider[elementConfigsMultiProvider.length - 1];
      lazyElementsLoaderService.addConfigs(lastAddedConfigs);
    }
  }
}

export interface LazyElementModuleOptions {
  elementConfigs?: ElementConfig[];
}

export interface LazyElementModuleRootOptions {
  elementConfigs?: ElementConfig[];
  rootOptions?: LazyElementRootOptions;
}

export interface LazyElementRootOptions {
  loadingComponent?: Type<any>;
  errorComponent?: Type<any>;
  isModule?: boolean;
  preload?: boolean;
}
