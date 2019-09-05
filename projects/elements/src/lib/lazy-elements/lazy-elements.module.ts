import {
  NgModule,
  Optional,
  Inject,
  ModuleWithProviders,
  InjectionToken
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

@NgModule({
  declarations: [LazyElementDirective, LazyElementDynamicDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective, LazyElementDynamicDirective]
})
export class LazyElementsModule {
  static forRoot(options: LazyElementModuleOptions): ModuleWithProviders {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: LAZY_ELEMENT_CONFIGS,
          useValue:
            options && options.elementConfigs ? options.elementConfigs : [],
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
      const lastAddedConfigs =
        elementConfigsMultiProvider[elementConfigsMultiProvider.length - 1];
      lazyElementsLoaderService.addConfigs(lastAddedConfigs);
    }
  }
}

export interface LazyElementModuleOptions {
  elementConfigs?: ElementConfig[];
}
