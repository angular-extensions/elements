import {
  NgModule,
  Optional,
  Inject,
  ModuleWithProviders,
  InjectionToken
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyElementDirective } from './lazy-element/lazy-element.directive';
import {
  LazyElementsLoaderService,
  ElementConfig
} from './lazy-elements-loader.service';

export const ELEMENTS_CONFIG = new InjectionToken<ElementConfig[]>(
  'ELEMENTS_CONFIG'
);

@NgModule({
  declarations: [LazyElementDirective],
  imports: [CommonModule],
  exports: [LazyElementDirective]
})
export class LazyElementsModule {
  static forRoot(config: ElementConfig[]): ModuleWithProviders {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: ELEMENTS_CONFIG,
          useValue: config ? config : [],
          multi: true
        }
      ]
    };
  }

  static forFeature(config: ElementConfig[]): ModuleWithProviders {
    return {
      ngModule: LazyElementsModule,
      providers: [
        {
          provide: ELEMENTS_CONFIG,
          useValue: config ? config : [],
          multi: true
        }
      ]
    };
  }

  constructor(
    lazyElementsLoaderService: LazyElementsLoaderService,
    @Optional() @Inject(ELEMENTS_CONFIG) configs = []
  ) {
    if (configs.length) {
      configs[configs.length - 1].forEach(config => {
        lazyElementsLoaderService.addConfig(config);
      });
    }
  }
}
