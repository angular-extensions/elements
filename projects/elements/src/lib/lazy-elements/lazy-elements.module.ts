import {
  NgModule,
  Optional,
  Inject,
  ModuleWithProviders,
  InjectionToken,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Type
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyElementDirective } from './lazy-element/lazy-element.directive';
import { LazyElementDynamicDirective } from './lazy-element-dynamic/lazy-element-dynamic.directive';
import {
  LazyElementsLoaderService,
  ElementConfig
} from './lazy-elements-loader.service';

export const LAZY_ELEMENT_CONFIGS = new InjectionToken<ElementConfig[]>(
  'LAZY_ELEMENT_CONFIGS'
);

export const LAZY_ELEMENT_GLOBAL_OPTIONS = new InjectionToken<
  LazyElementModuleGlobalOptions
>('LAZY_ELEMENT_GLOBAL_OPTIONS');

@NgModule({
  declarations: [LazyElementDirective, LazyElementDynamicDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective, LazyElementDynamicDirective]
})
export class LazyElementsModule {
  static forRoot(options: LazyElementRootOptions): ModuleWithProviders {
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
          provide: LAZY_ELEMENT_GLOBAL_OPTIONS,
          useValue: options.globalOptions ? options.globalOptions : {}
        },
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: options,
          multi: true
        }
      ]
    };
  }

  static forFeature(options: LazyElementModuleOptions): ModuleWithProviders {
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
    @Inject(LAZY_ELEMENT_GLOBAL_OPTIONS)
    globalOptions: LazyElementModuleGlobalOptions
  ) {
    if (elementConfigsMultiProvider && elementConfigsMultiProvider.length) {
      const lastAddedConfigs =
        elementConfigsMultiProvider[elementConfigsMultiProvider.length - 1];
      lazyElementsLoaderService.addConfigs(lastAddedConfigs);
    }

    if (globalOptions) {
      lazyElementsLoaderService.setGlobalOptions(globalOptions);
    }
  }
}

export interface LazyElementModuleOptions {
  elementConfigs?: ElementConfig[];
}

export interface LazyElementRootOptions {
  elementConfigs?: ElementConfig[];
  globalOptions?: LazyElementModuleGlobalOptions;
}

export interface LazyElementModuleGlobalOptions {
  loadingComponent?: Type<any>;
  errorComponent?: Type<any>;
  isModule?: boolean;
}
