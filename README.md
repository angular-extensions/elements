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
2. Add `import { LazyElementDirective } from '@angular-extensions/elements'`;
3. Append `LazyElementDirective` to the `imports: []` of your `MyOrgComponent`
4. Add new `schemas: []` property with `CUSTOM_ELEMENTS_SCHEMA` value to `@Component` decorator of your `MyOrgComponent`
5. Use `*axLazyElement` directive on an element you wish to load and pass in the url of the element bundle

Example of component implementation

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementDirective } from '@angular-extensions/elements';

@Component({
  selector: 'your-org-feature',
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <!-- will be lazy loaded and uses standard Angular template bindings -->
    <some-element
      *axLazyElement="elementUrl"
      [data]="data"
      (dataChange)="handleChange($event)"
    ></some-element>
  `,
})
export class MyOrgComponent {
  elementUrl = 'https://your-org.com/elements/some-element.js';

  data: SomeData;

  handleChange(change: Partial<SomeData>) {
    // ...
  }
}
```

## Supported Angular versions

Library was tested with the following versions of Angular and is meant to be used
with the corresponding major version (`"@angular/core"": "^15.0.0"` with `"@angular-extensions/elements": "^15.0.0"` ).

- 9.x (full IVY support, using renderers so careful with SSR)
- 8.x (partial IVY support, `axLazyElement` works but `axLazyElementDynamic` does NOT work with IVY)
- 7.x
- 6.x (eg `npm i @angular-extensions/elements@^6.0.0`)

## Internal dep graph

![Internal dep graph](https://raw.githubusercontent.com/angular-extensions/elements/master/dep-graph.png)

## Become a contributor

#### Missing a feature, found bug or typo in docs?

Please, feel free to open an [issue](https://github.com/angular-extensions/elements/issues)
or submit a [pull request](https://github.com/angular-extensions/elements/pulls) to make this project better for everyone! 🤗

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://medium.com/@tomastrajan"><img src="https://avatars0.githubusercontent.com/u/3764868?v=4?s=85" width="85px;" alt="Tomas Trajan"/><br /><sub><b>Tomas Trajan</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=tomastrajan" title="Code">💻</a> <a href="#design-tomastrajan" title="Design">🎨</a> <a href="#example-tomastrajan" title="Examples">💡</a> <a href="https://github.com/angular-extensions/elements/commits?author=tomastrajan" title="Documentation">📖</a> <a href="#ideas-tomastrajan" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-tomastrajan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/angular-extensions/elements/commits?author=tomastrajan" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://medium.com/@overthesanity"><img src="https://avatars.githubusercontent.com/u/7337691?v=4?s=85" width="85px;" alt="Artur Androsovych"/><br /><sub><b>Artur Androsovych</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=arturovt" title="Code">💻</a> <a href="https://github.com/angular-extensions/elements/issues?q=author%3Aarturovt" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="16.66%"><a href="http://www.lambda-it.ch"><img src="https://avatars2.githubusercontent.com/u/2899448?v=4?s=85" width="85px;" alt="Wayne Maurer"/><br /><sub><b>Wayne Maurer</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/issues?q=author%3Awmaurer" title="Bug reports">🐛</a> <a href="https://github.com/angular-extensions/elements/commits?author=wmaurer" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://www.santoshyadav.dev"><img src="https://avatars3.githubusercontent.com/u/11923975?v=4?s=85" width="85px;" alt="Santosh Yadav"/><br /><sub><b>Santosh Yadav</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=santoshyadav198613" title="Code">💻</a> <a href="#platform-santoshyadav198613" title="Packaging/porting to new platform">📦</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://twitter.com/daviddalbusco"><img src="https://avatars0.githubusercontent.com/u/16886711?v=4?s=85" width="85px;" alt="David Dal Busco"/><br /><sub><b>David Dal Busco</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=peterpeterparker" title="Code">💻</a> <a href="#example-peterpeterparker" title="Examples">💡</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://www.linkedin.com/in/mohammedzamakhan"><img src="https://avatars3.githubusercontent.com/u/2327532?v=4?s=85" width="85px;" alt="Zama Khan Mohammed"/><br /><sub><b>Zama Khan Mohammed</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=mohammedzamakhan" title="Code">💻</a> <a href="#ideas-mohammedzamakhan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/angular-extensions/elements/commits?author=mohammedzamakhan" title="Tests">⚠️</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/angelfraga"><img src="https://avatars0.githubusercontent.com/u/11693938?v=4?s=85" width="85px;" alt="Angel Fraga Parodi"/><br /><sub><b>Angel Fraga Parodi</b></sub></a><br /><a href="#example-angelfraga" title="Examples">💡</a> <a href="#ideas-angelfraga" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/ye3i"><img src="https://avatars1.githubusercontent.com/u/5447242?v=4?s=85" width="85px;" alt="ye3i"/><br /><sub><b>ye3i</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=ye3i" title="Code">💻</a> <a href="#ideas-ye3i" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/MagicCurlyHair"><img src="https://avatars3.githubusercontent.com/u/38192464?v=4?s=85" width="85px;" alt="Heorhi Shakanau"/><br /><sub><b>Heorhi Shakanau</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=MagicCurlyHair" title="Code">💻</a> <a href="#ideas-MagicCurlyHair" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="16.66%"><a href="http://www.plets.me/"><img src="https://avatars3.githubusercontent.com/u/119980?v=4?s=85" width="85px;" alt="Felipe Plets"/><br /><sub><b>Felipe Plets</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=felipeplets" title="Code">💻</a> <a href="#design-felipeplets" title="Design">🎨</a> <a href="#example-felipeplets" title="Examples">💡</a> <a href="https://github.com/angular-extensions/elements/commits?author=felipeplets" title="Documentation">📖</a> <a href="#ideas-felipeplets" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/angular-extensions/elements/commits?author=felipeplets" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/jkubiszewski"><img src="https://avatars.githubusercontent.com/u/5447242?v=4?s=85" width="85px;" alt="jkubiszewski"/><br /><sub><b>jkubiszewski</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=jkubiszewski" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/gshokanov"><img src="https://avatars.githubusercontent.com/u/38192464?v=4?s=85" width="85px;" alt="Heorhi Shakanau"/><br /><sub><b>Heorhi Shakanau</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=gshokanov" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/NagornovAlex"><img src="https://avatars.githubusercontent.com/u/3100132?v=4?s=85" width="85px;" alt="NagornovAlex"/><br /><sub><b>NagornovAlex</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=NagornovAlex" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://www.josephndavis.com/"><img src="https://avatars.githubusercontent.com/u/16785168?v=4?s=85" width="85px;" alt="Joseph Davis"/><br /><sub><b>Joseph Davis</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=Nerrdii" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/Arooba-git"><img src="https://avatars.githubusercontent.com/u/56495631?v=4?s=85" width="85px;" alt="Arooba Shahoor"/><br /><sub><b>Arooba Shahoor</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=Arooba-git" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/twixthehero"><img src="https://avatars.githubusercontent.com/u/1883172?v=4?s=85" width="85px;" alt="Maximilian Wright"/><br /><sub><b>Maximilian Wright</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=twixthehero" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/apokralipsa"><img src="https://avatars.githubusercontent.com/u/7910183?v=4?s=85" width="85px;" alt="Jakub Stawiarski"/><br /><sub><b>Jakub Stawiarski</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=apokralipsa" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/9kubczas4"><img src="https://avatars.githubusercontent.com/u/43759569?v=4?s=85" width="85px;" alt="Paweł Kubiak"/><br /><sub><b>Paweł Kubiak</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=9kubczas4" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/volvachev"><img src="https://avatars.githubusercontent.com/u/34657605?v=4?s=85" width="85px;" alt="Egor Volvachev"/><br /><sub><b>Egor Volvachev</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=volvachev" title="Code">💻</a></td>
      <td align="center" valign="top" width="16.66%"><a href="https://github.com/DanielBou99"><img src="https://avatars.githubusercontent.com/u/43351001?v=4?s=85" width="85px;" alt="Daniel Bou"/><br /><sub><b>Daniel Bou</b></sub></a><br /><a href="https://github.com/angular-extensions/elements/commits?author=DanielBou99" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Sponsors

> Are you currently working in an **enterprise polyrepo environment** with many applications and found yourself thinking you could provide so much more value only if you had better overview to plan, track progress and just get things done?

Try _[Omniboard](https://omniboard.dev), the best tool for lead software engineers and architects_
that helps them to get an overview to drive change in **enterprise polyrepo environments** by querying and tracking all their code bases!

The free plan let's you get a full overview of all your projects with your first dashboard, tracking up to 3 different things!

<a href="http://www.youtube.com/watch?feature=player_embedded&v=uDnNE9FuLwc" target="_blank">
    <img src="https://app.omniboard.dev/assets/videos/omniboard-getting-started.png" 
              alt="Omniboard.dev - getting started in less than 5 minutes" width="100%" />
</a>
