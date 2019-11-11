import { InjectionToken } from '@angular/core';

export interface LazyElementsStateService {
  getElement(url: string): Promise<void>;

  setElement(url: string, promise: Promise<void>): void;

  hasElement(url: string): boolean;
}

export class DefaultLazyElementsStateService
  implements LazyElementsStateService {
  private registry = new Map<string, Promise<void>>();

  constructor() {}

  getElement(url: string): Promise<void> {
    return this.registry.get(this.stripUrlProtocol(url));
  }

  setElement(url: string, elementReference: Promise<void>): void {
    this.registry.set(this.stripUrlProtocol(url), elementReference);
  }

  hasElement(url: string): boolean {
    return this.registry.has(this.stripUrlProtocol(url));
  }

  private stripUrlProtocol(url: string): string {
    return url.replace(/https?:\/\//, '');
  }
}

export const LAZY_ELEMENTS_STATE = new InjectionToken<
  Map<string, Promise<void>>
>('LAZY_ELEMENTS_STATE');
