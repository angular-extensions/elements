import { Type } from '@angular/core';

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

export interface LazyElementsRegistry extends Map<string, Promise<void>> {
  get: (url: string) => Promise<void> | undefined;
  set: (url: string, notifier: Promise<void>) => this;
  has: (url: string) => boolean;
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
  importMap?: boolean;
  preload?: boolean;
  hooks?: HooksConfig;
}

// provide APIs
export interface LazyElementOptions {
  elementConfigs?: ElementConfig[];
  rootOptions?: LazyElementRootOptions;
}
