import { Injectable, Type, Optional, Inject } from '@angular/core';

import { LazyElementRootOptions } from './lazy-elements.module';
import { LAZY_ELEMENT_ROOT_OPTIONS } from './lazy-elements.tokens';

const LOG_PREFIX = '@angular-extensions/elements';

export interface ElementConfig {
  tag: string;
  url: string;
  isModule?: boolean;
  loadingComponent?: Type<any>;
  errorComponent?: Type<any>;
}

@Injectable({
  providedIn: 'root'
})
export class LazyElementsLoaderService {
  registry: Map<string, Promise<void>> = new Map<string, Promise<void>>();
  configs: ElementConfig[] = [];

  constructor(
    @Optional()
    @Inject(LAZY_ELEMENT_ROOT_OPTIONS)
    public options: LazyElementRootOptions
  ) {
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
      }
    });
  }

  getElementConfig(tag: string): ElementConfig {
    return this.configs.find(config => config.tag === tag);
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

    if (!this.hasElement(url)) {
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

    return this.registry.get(this.stripUrlProtocol(url));
  }

  private addElement(url: string): Notifier {
    let notifier: Notifier;
    this.registry.set(
      this.stripUrlProtocol(url),
      new Promise<void>((resolve, reject) => (notifier = { resolve, reject }))
    );
    return notifier;
  }

  private hasElement(url: string): boolean {
    return this.registry.has(this.stripUrlProtocol(url));
  }

  private stripUrlProtocol(url: string): string {
    return url.replace(/https?:\/\//, '');
  }
}

interface Notifier {
  resolve: () => void;
  reject: (error: any) => void;
}
