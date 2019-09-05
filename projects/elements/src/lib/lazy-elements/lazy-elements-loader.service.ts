import { Injectable } from '@angular/core';

const LOG_PREFIX = '@angular-extensions/elements';

export interface ElementConfig {
  tag: string;
  url: string;
  isModule?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LazyElementsLoaderService {
  registry: Map<string, Promise<void>> = new Map<string, Promise<void>>();
  configs: ElementConfig[] = [];

  constructor() {}

  addConfigs(newConfigs: ElementConfig[]) {
    newConfigs.forEach(newConfig => {
      const existingConfig = this.configs.find(
        config => config.tag === newConfig.tag
      );
      if (existingConfig) {
        console.warn(
          `${LOG_PREFIX} - ElementConfig for tag '${newConfig.tag}' was previously added, it will not be added multiple times, continue...`
        );
      } else {
        this.configs.push(newConfig);
      }
    });
  }

  loadElement(url: string, tag: string, isModule?: boolean): Promise<void> {
    const config = this.configs.find(c => c.tag === tag);

    if (!url) {
      if (!config) {
        throw new Error(`${LOG_PREFIX} - url for <${tag}> not found`);
      }
      url = config.url;
    }

    if (isModule === undefined) {
      isModule =
        config && config.isModule !== undefined ? config.isModule : false;
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
