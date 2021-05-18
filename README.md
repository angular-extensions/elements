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
- [Blog post](https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007)
- [Meetup presentation (video)](https://www.youtube.com/watch?v=X__jkPGYRUs)

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
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Example of component implementation

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  template: `
    <!-- will be lazy loaded and uses standard Angular template bindings -->
    <some-element
      *axLazyElement="elementUrl"
      [data]="data"
      (dataChange)="handleChange($event)"
    >
    </some-element>
  `,
})
export class FeatureComponent {
  elementUrl = 'https://your-org.com/elements/some-element.js';

  data: SomeData;

  handleChange(change: Partial<SomeData>) {
    // ...
  }
}
```

## Supported Angular versions

Library was tested with the following versions of Angular and is meant to be used
with the corresponding major version (`"@angular/core"": "^9.0.0"` with `"@angular-extensions/elements": "^9.0.0"` ).

- 9.x (full IVY support, using renderers so careful with SSR)
- 8.x (partial IVY support, `axLazyElement` works but `axLazyElementDynamic` does NOT work with IVY)
- 7.x
- 6.x (eg `npm i @angular-extensions/elements@^6.0.0`)

## Become a contributor

#### Missing a feature, found bug or typo in docs?

Please, feel free to open an [issue](https://github.com/angular-extensions/elements/issues)
or submit a [pull request](https://github.com/angular-extensions/elements/pulls) to make this project better for everyone! 🤗

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://medium.com/@tomastrajan"><img src="https://avatars0.githubusercontent.com/u/3764868?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Tomas Trajan</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=tomastrajan" title="Code">💻</a> <a href="#design-tomastrajan" title="Design">🎨</a> <a href="#example-tomastrajan" title="Examples">💡</a> <a href="https://github.com/angular-extensions/elements/commits?author=tomastrajan" title="Documentation">📖</a> <a href="#ideas-tomastrajan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-tomastrajan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/angular-extensions/elements/commits?author=tomastrajan" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://www.lambda-it.ch"><img src="https://avatars2.githubusercontent.com/u/2899448?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Wayne Maurer</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/issues?q=author%3Awmaurer" title="Bug reports">🐛</a> <a href="https://github.com/angular-extensions/elements/commits?author=wmaurer" title="Code">💻</a></td>
    <td align="center"><a href="https://www.santoshyadav.dev"><img src="https://avatars3.githubusercontent.com/u/11923975?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Santosh Yadav</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=santoshyadav198613" title="Code">💻</a> <a href="#platform-santoshyadav198613" title="Packaging/porting to new platform">📦</a></td>
    <td align="center"><a href="https://twitter.com/daviddalbusco"><img src="https://avatars0.githubusercontent.com/u/16886711?v=4?s=85" width="85px;" alt=""/><br /><sub><b>David Dal Busco</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=peterpeterparker" title="Code">💻</a> <a href="#example-peterpeterparker" title="Examples">💡</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/mohammedzamakhan"><img src="https://avatars3.githubusercontent.com/u/2327532?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Zama Khan Mohammed</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=mohammedzamakhan" title="Code">💻</a> <a href="#ideas-mohammedzamakhan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/angular-extensions/elements/commits?author=mohammedzamakhan" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/angelfraga"><img src="https://avatars0.githubusercontent.com/u/11693938?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Angel Fraga Parodi</b></sub></a><br /><a href="#example-angelfraga" title="Examples">💡</a> <a href="#ideas-angelfraga" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ye3i"><img src="https://avatars1.githubusercontent.com/u/5447242?v=4?s=85" width="85px;" alt=""/><br /><sub><b>ye3i</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=ye3i" title="Code">💻</a> <a href="#ideas-ye3i" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/MagicCurlyHair"><img src="https://avatars3.githubusercontent.com/u/38192464?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Heorhi Shakanau</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=MagicCurlyHair" title="Code">💻</a> <a href="#ideas-MagicCurlyHair" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://www.plets.me/"><img src="https://avatars3.githubusercontent.com/u/119980?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Felipe Plets</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=felipeplets" title="Code">💻</a> <a href="#design-felipeplets" title="Design">🎨</a> <a href="#example-felipeplets" title="Examples">💡</a> <a href="https://github.com/angular-extensions/elements/commits?author=felipeplets" title="Documentation">📖</a> <a href="#ideas-felipeplets" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/angular-extensions/elements/commits?author=felipeplets" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/jkubiszewski"><img src="https://avatars.githubusercontent.com/u/5447242?v=4?s=85" width="85px;" alt=""/><br /><sub><b>jkubiszewski</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=jkubiszewski" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/gshokanov"><img src="https://avatars.githubusercontent.com/u/38192464?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Heorhi Shakanau</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=gshokanov" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/NagornovAlex"><img src="https://avatars.githubusercontent.com/u/3100132?v=4?s=85" width="85px;" alt=""/><br /><sub><b>NagornovAlex</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=NagornovAlex" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.josephndavis.com/"><img src="https://avatars.githubusercontent.com/u/16785168?v=4?s=85" width="85px;" alt=""/><br /><sub><b>Joseph Davis</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=Nerrdii" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
