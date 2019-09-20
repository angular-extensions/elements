import {
  NgModule,
  Optional,
  Inject,
  ModuleWithProviders,
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Type
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
  LAZY_ELEMENT_CONFIGS
} from './lazy-elements.tokens';

@NgModule({
  declarations: [LazyElementDirective, LazyElementDynamicDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective, LazyElementDynamicDirective],
  providers: []
})
export class LazyElementsModule {
  static forRoot(options: LazyElementModuleRootOptions): ModuleWithProviders {
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
    elementConfigsMultiProvider: ElementConfig[][]
  ) {
    if (elementConfigsMultiProvider && elementConfigsMultiProvider.length) {
      const configs = [].concat.apply([], elementConfigsMultiProvider);
      lazyElementsLoaderService.addConfigs(configs);
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
}
