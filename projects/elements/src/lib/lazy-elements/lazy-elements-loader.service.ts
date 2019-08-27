import { Injectable } from '@angular/core';

const LOG_PREFIX = '@angular-extensions/elements';

export interface ElementConfig {
  tag: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LazyElementsLoaderService {
  registry: Map<string, Promise<void>> = new Map<string, Promise<void>>();
  configs: ElementConfig[] = [];

  constructor() {}

  addConfig(config: ElementConfig) {
    const existingConfig = this.configs.find(c => c.tag === config.tag);
    if (existingConfig) {
      console.warn(
        `${LOG_PREFIX} - ElementConfig for tag '${config.tag}' was previously added, it cannot be added multiple times`
      );
    } else {
      this.configs.push(config);
    }
  }

  loadElement(
    url: string,
    tag: string,
    isModule: boolean = false
  ): Promise<void> {
    let elementUrl = url;
    if (!url) {
      const config = this.configs.find(c => c.tag === tag);
      if (!config) {
        throw new Error(`${LOG_PREFIX} - url for <${tag}> not found`);
      }
      elementUrl = config.url;
    }

    if (!tag) {
      throw new Error(
        `${LOG_PREFIX} - tag for '${elementUrl}' not found, the *axLazyElement has to be used on HTML element`
      );
    }

    if (!this.hasElement(elementUrl)) {
      const notifier = this.addElement(elementUrl);
      const script = document.createElement('script') as HTMLScriptElement;
      if (isModule) {
        script.type = 'module';
      }
      script.src = elementUrl;
      script.onload = notifier.resolve;
      script.onerror = notifier.reject;
      document.body.appendChild(script);
    }

    return this.registry.get(this.stripUrlProtocol(elementUrl));
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
