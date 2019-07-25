<p align="center">
  <img src="https://raw.github.com/angular-extensions/elements/master/projects/elements-demo/src/assets/logo/logo.svg?sanitize=true" width="120" height="120">
</p>

# ANGULAR EXTENSIONS ELEMENTS

### The easiest way to lazy-load Angular Elements or any other web components in your Angular application!

by [@tomastrajan](https://twitter.com/tomastrajan)

[![npm](https://img.shields.io/npm/v/@angular-extensions/elements.svg)](https://www.npmjs.com/package/@angular-extensions/elements) [![npm](https://img.shields.io/github/license/angular-extensions/elements.svg)](https://github.com/angular-extensions/elements/blob/master/LICENSE) [![npm](https://img.shields.io/npm/dm/@angular-extensions/elements.svg)](https://www.npmjs.com/package/@angular-extensions/elements) [![Build Status](https://travis-ci.org/angular-extensions/elements.svg?branch=master)](https://travis-ci.org/angular-extensions/elements) [![codecov](https://codecov.io/gh/angular-extensions/elements/branch/master/graph/badge.svg)](https://codecov.io/gh/angular-extensions/elements) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![Twitter Follow](https://img.shields.io/twitter/follow/tomastrajan.svg?style=social&label=Follow)](https://twitter.com/tomastrajan)

## Documentation

- [Docs](https://angular-extensions.github.io/elements/)
- [Getting started](https://angular-extensions.github.io/elements/#/docs/getting-started)
- [Use cases](https://angular-extensions.github.io/elements/#/docs/use-cases)
- [FAQ](https://angular-extensions.github.io/elements/#/docs/faq)
- [API](https://angular-extensions.github.io/elements/#/docs/api)
- [Examples](https://angular-extensions.github.io/elements/#/examples)

## Quickstart

1. Install `npm i @angular-extensions/elements`
2. Add `import { LazyElementsModule } from '@angular-extensions/elements';`
3. Append `LazyElementsModule` to the `imports: []` of your `AppModule`
4. Add new `schemas: []` property with `CUSTOM_ELEMENTS_SCHEMA` value to `@NgModule` decorator of your `AppModule`
5. Use `*axLazyElement` directive on an element you wish to load and pass in the url of the element bundle

Example of module implementation...

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, LazyElementsModule],
  declarations: [AppComponent, FeatureComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Example of component implementation

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  template: `
    <some-element *axLazyElement="elementUrl"></some-element>
  `
})
export class FeatureComponent {
  elementUrl = 'https://your-org.com/elements/some-element.js';
}
```

## Supported Angular versions

Library was tested with the following versions of Angular and is meant to be used
with the corresponding major version (`"@angular/core"": "^8.0.0"` with `"@angular-extensions/elements": "^8.0.0"` ).

- 7.x
- 8.x

## Become a contributor

#### Missing a feature, found bug or typo in docs?

Please, feel free to open an [issue](https://github.com/angular-extensions/elements/issues)
or submit a [pull request](https://github.com/angular-extensions/elements/pulls) to make this project better for everyone! 🤗
