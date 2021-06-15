import { Inject, Injectable, Optional, Type } from '@angular/core';

import { LazyElementRootOptions } from './lazy-elements.module';
import {
  LAZY_ELEMENT_ROOT_OPTIONS,
  LAZY_ELEMENTS_REGISTRY,
  LazyElementsRegistry,
} from './lazy-elements.tokens';

const LOG_PREFIX = '@angular-extensions/elements';

export type Hook = (tag: string) => Promise<void> | void;

export interface HooksConfig {
  beforeLoad?: Hook;
  afterLoad?: Hook;
}

export interface ElementConfig {
  tag: string;
  url: string;
  isModule?: boolean;
  importMap?: boolean;
  loadingComponent?: Type<any>;
  errorComponent?: Type<any>;
  preload?: boolean;
  hooks?: HooksConfig;
  isAdded?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LazyElementsLoaderService {
  configs: ElementConfig[] = [];

  constructor(
    @Inject(LAZY_ELEMENTS_REGISTRY) private registry: LazyElementsRegistry,
    @Optional()
    @Inject(LAZY_ELEMENT_ROOT_OPTIONS)
    public options: LazyElementRootOptions
  ) {
    if (!options) {
      this.options = {};
    }
  }

  addConfigs(newConfigs: ElementConfig[]) {
    newConfigs.forEach((newConfig) => {
      const existingConfig = this.getElementConfig(newConfig.tag);
      if (existingConfig) {
        ngDevMode &&
          console.warn(
            `${LOG_PREFIX} - ElementConfig for tag '${newConfig.tag}' was previously added, it will not be added multiple times, continue...`
          );
      } else {
        newConfig.isAdded = true;
        this.configs.push(newConfig);
        const shouldPreload =
          newConfig.preload !== undefined
            ? newConfig.preload
            : this.options.preload;
        if (shouldPreload) {
          this.loadElement(
            newConfig.url,
            newConfig.tag,
            newConfig.isModule,
            newConfig.importMap,
            newConfig.hooks
          );
        }
      }
    });
  }

  getElementConfig(tag: string): ElementConfig {
    return this.configs.find((config) => config.tag === tag);
  }

  preload(tags?: string[]) {
    let configs = this.configs;
    if (tags) {
      configs = this.configs.filter((config) => tags.includes(config.tag));
    }
    configs.forEach((config) =>
      this.loadElement(
        config.url,
        config.tag,
        config.isModule,
        config.importMap,
        config.hooks
      )
    );
  }

  async loadElement(
    url: string,
    tag: string,
    isModule?: boolean,
    importMap?: boolean,
    hooksConfig?: HooksConfig
  ): Promise<void> {
    const config = this.getElementConfig(tag);
    isModule ??= config?.isModule ?? this.options.isModule;
    importMap ??= config?.importMap ?? this.options.importMap;

    if (ngDevMode && !tag) {
      throw new Error(
        `${LOG_PREFIX} - tag for '${url}' not found, the *axLazyElement has to be used on HTML element`
      );
    }

    if (!url) {
      if (ngDevMode && !config?.url && !importMap) {
        throw new Error(`${LOG_PREFIX} - url for <${tag}> not found`);
      } else if (importMap) {
        url = tag;
      } else {
        url = config.url;
      }
    }

    if (!this.hasElement(url)) {
      const notifier = this.addElement(url);

      const beforeLoadHook =
        hooksConfig?.beforeLoad ??
        config?.hooks?.beforeLoad ??
        this.options?.hooks?.beforeLoad;
      const afterLoadHook =
        hooksConfig?.afterLoad ??
        config?.hooks?.afterLoad ??
        this.options?.hooks?.afterLoad;

      if (importMap) {
        url = await this.resolveImportMap(url);
      }

      const script = document.createElement('script') as HTMLScriptElement;
      if (isModule) {
        script.type = 'module';
      }
      script.src = url;
      const onLoad = () => {
        if (afterLoadHook) {
          this.handleHook(afterLoadHook, tag)
            .then(notifier.resolve)
            .catch(notifier.reject);
        } else {
          notifier.resolve();
        }

        cleanup();
      };
      const onError = (error: ErrorEvent) => {
        notifier.reject(error);
        cleanup();
      };
      // The `load` and `error` event listeners capture `this`. That's why they have to be removed manually.
      // Otherwise, the `LazyElementsLoaderService` is not going to be GC'd.
      function cleanup() {
        script.removeEventListener('load', onLoad);
        script.removeEventListener('error', onError);
      }
      script.addEventListener('load', onLoad);
      script.addEventListener('error', onError);
      if (beforeLoadHook) {
        this.handleHook(beforeLoadHook, tag)
          .then(() => document.body.appendChild(script))
          .catch(notifier.reject);
      } else {
        document.body.appendChild(script);
      }
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

  private handleHook(hook: Hook, tag: string): Promise<void> {
    try {
      return Promise.resolve(hook(tag));
    } catch (err) {
      return Promise.reject(err);
    }
  }

  private async resolveImportMap(url: string) {
    const System = (window as any).System;
    if (System) {
      await System.prepareImport();
      url = System.resolve(url);
    } else if (ngDevMode) {
      throw new Error(
        `${LOG_PREFIX} - importMap feature depends on SystemJS library to be globally loaded but none was found, thus '${url}' can't be resolved. You should either load SystemJS or remove the importMap flag.`
      );
    }
    return url;
  }
}

interface Notifier {
  resolve: () => void;
  reject: (error: any) => void;
}
