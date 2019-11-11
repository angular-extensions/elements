import { Inject, Injectable, Optional, Type } from '@angular/core';

import { LazyElementRootOptions } from './lazy-elements.module';
import { LAZY_ELEMENT_ROOT_OPTIONS } from './lazy-elements.tokens';
import {
  DefaultLazyElementsStateService,
  LAZY_ELEMENTS_STATE,
  LazyElementsStateService
} from './lazy-elements-state.service';

const LOG_PREFIX = '@angular-extensions/elements';

export interface ElementConfig {
  tag: string;
  url: string;
  isModule?: boolean;
  loadingComponent?: Type<any>;
  errorComponent?: Type<any>;
  preload?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LazyElementsLoaderService {
  configs: ElementConfig[] = [];

  constructor(
    @Optional()
    @Inject(LAZY_ELEMENTS_STATE)
    private readonly lazyElementsStateService: LazyElementsStateService,
    @Optional()
    @Inject(LAZY_ELEMENT_ROOT_OPTIONS)
    public options: LazyElementRootOptions
  ) {
    if (!this.lazyElementsStateService) {
      this.lazyElementsStateService = new DefaultLazyElementsStateService();
    }
    if (!options) {
      this.options = {};
    }
  }

  addConfigs(newConfigs: ElementConfig[]) {
    newConfigs.forEach(newConfig => {
      const existingConfig = this.getElementConfig(newConfig.tag);
      if (existingConfig) {
        console.warn(
          `${LOG_PREFIX} - ElementConfig for tag '${newConfig.tag}' was previously added, it will not be added multiple times, continue...`
        );
      } else {
        this.configs.push(newConfig);
        const shouldPreload =
          newConfig.preload !== undefined
            ? newConfig.preload
            : this.options.preload;
        if (shouldPreload) {
          this.loadElement(newConfig.url, newConfig.tag, newConfig.isModule);
        }
      }
    });
  }

  getElementConfig(tag: string): ElementConfig {
    return this.configs.find(config => config.tag === tag);
  }

  preload(tags?: string[]) {
    let configs = this.configs;
    if (tags) {
      configs = this.configs.filter(config => tags.includes(config.tag));
    }
    configs.forEach(config =>
      this.loadElement(config.url, config.tag, config.isModule)
    );
  }

  loadElement(url: string, tag: string, isModule?: boolean): Promise<void> {
    const config = this.getElementConfig(tag);

    if (!url) {
      if (!config) {
        throw new Error(`${LOG_PREFIX} - url for <${tag}> not found`);
      }
      url = config.url;
    }

    if (isModule === undefined) {
      isModule =
        config && config.isModule !== undefined
          ? config.isModule
          : this.options.isModule;
    }

    if (!tag) {
      throw new Error(
        `${LOG_PREFIX} - tag for '${url}' not found, the *axLazyElement has to be used on HTML element`
      );
    }

    if (!this.lazyElementsStateService.hasElement(url)) {
      const notifier = this.addElement(url);
      const script = document.createElement('script') as HTMLScriptElement;
      if (isModule) {
        script.type = 'module';
      }
      script.src = url;
      script.onload = notifier.resolve;
      script.onerror = notifier.reject;
      document.body.appendChild(script);
    }

    return this.lazyElementsStateService.getElement(url);
  }

  private addElement(url: string): Notifier {
    let notifier: Notifier;
    this.lazyElementsStateService.setElement(
      url,
      new Promise<void>((resolve, reject) => (notifier = { resolve, reject }))
    );
    return notifier;
  }
}

interface Notifier {
  resolve: () => void;
  reject: (error: any) => void;
}
