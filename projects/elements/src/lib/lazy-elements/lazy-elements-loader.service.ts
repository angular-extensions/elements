import { Injectable } from '@angular/core';

const LOG_PREFIX = '@angular-extensions/elements';

@Injectable({
  providedIn: 'root'
})
export class LazyElementsLoaderService {
  registry: Map<string, Promise<void>> = new Map<string, Promise<void>>();

  constructor() {}

  loadElement(url: string, tag: string): Promise<void> {
    if (!url) {
      throw new Error(`${LOG_PREFIX} - url for <${tag}> not found`);
    }

    if (!tag) {
      throw new Error(`${LOG_PREFIX} - tag for '${url}' not found, the *axLazyElement has to be used on HTML element`);
    }

    if (!this.hasElement(url)) {
      const notifier = this.addElement(url);
      const script = document.createElement('script') as HTMLScriptElement;
      script.src = url;
      script.onload = notifier;
      document.body.appendChild(script);
    }

    return this.registry.get(this.stripUrlProtocol(url));
  }

  private addElement(url: string): () => void {
    let notifier;
    this.registry.set(this.stripUrlProtocol(url), new Promise<void>(resolve => (notifier = resolve)));
    return notifier;
  }

  private hasElement(url: string): boolean {
    return this.registry.has(this.stripUrlProtocol(url));
  }

  private stripUrlProtocol(url: string): string {
    return url.replace(/https?:\/\//, '');
  }
}
