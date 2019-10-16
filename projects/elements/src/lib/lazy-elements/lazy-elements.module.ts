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
  LAZY_ELEMENT_MODULE_ROOT_OPTIONS,
  LAZY_ELEMENT_MODULE_OPTIONS
} from './lazy-elements.tokens';

export function createLazyElementRootGuard(options: LazyElementModuleOptions) {
  if (options) {
    throw new TypeError(
      `LazyElementsModule.forRoot() called twice. Feature modules should use LazyElementsModule.forFeature() instead.`
    );
  }
  return 'guarded';
}

// tslint:disable:unified-signatures
// Switching to unified signatures breaks the typechecking
export function elementConfigsFactory(
  options: () => LazyElementModuleOptions | LazyElementModuleRootOptions
): ElementConfig[];
export function elementConfigsFactory(
  options: LazyElementModuleOptions | LazyElementModuleRootOptions
): ElementConfig[];
export function elementConfigsFactory(options) {
  const optionsObject = typeof options === 'function' ? options() : options;
  return optionsObject && optionsObject.elementConfigs
    ? optionsObject.elementConfigs
    : [];
}

export function rootOptionsFactory(
  options: () => LazyElementModuleRootOptions | LazyElementModuleRootOptions
): LazyElementRootOptions;
export function rootOptionsFactory(
  options: LazyElementModuleRootOptions | LazyElementModuleRootOptions
): LazyElementRootOptions;
export function rootOptionsFactory(options) {
  const optionsObject = typeof options === 'function' ? options() : options;
  return (optionsObject && optionsObject.rootOptions) || {};
}

@NgModule({
  declarations: [LazyElementDirective, LazyElementDynamicDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective, LazyElementDynamicDirective],
  providers: []
})
export class LazyElementsModule {
  static forRoot(
    options: () => LazyElementModuleRootOptions
  ): ModuleWithProviders;
  static forRoot(options: LazyElementModuleRootOptions): ModuleWithProviders;
  static forRoot(options) {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_MODULE_ROOT_OPTIONS,
          useValue: options
        },
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useFactory: elementConfigsFactory,
          deps: [LAZY_ELEMENT_MODULE_ROOT_OPTIONS],
          multi: true
        },
        {
          provide: LAZY_ELEMENT_ROOT_OPTIONS,
          useFactory: rootOptionsFactory,
          deps: [LAZY_ELEMENT_MODULE_ROOT_OPTIONS]
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
    options: () => LazyElementModuleOptions
  ): ModuleWithProviders;
  static forFeature(options: LazyElementModuleOptions): ModuleWithProviders;
  static forFeature(options) {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_MODULE_OPTIONS,
          useValue: options
        },
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useFactory: elementConfigsFactory,
          deps: [LAZY_ELEMENT_MODULE_OPTIONS],
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
  // tslint:enable:unified-signatures

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
