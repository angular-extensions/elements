import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementDynamicDirective } from '@angular-extensions/elements';

import { ExampleComponent } from '../../../shared/example/example.component';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  imports: [
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    FormsModule,
    LazyElementDynamicDirective,
    HighlightModule,
    ExampleComponent,
    ExampleCodeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DynamicComponent implements OnInit {
  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2standalone = CODE_EXAMPLE_2_STANDALONE;
  codeExample2module = CODE_EXAMPLE_2_MODULE;
  codeExample2html = CODE_EXAMPLE_2_HTML;
  codeExample3html = CODE_EXAMPLE_3_HTML;

  // example state
  isButtonVariantPrimary = true;
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;

  dynamicConfigs = [
    {
      tag: 'sl-button',
      url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js',
      isModule: true,
      content: 'Increment',
      actionName: 'increment',
    },
    {
      tag: 'wired-button',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
      content: 'Decrement',
      actionName: 'decrement',
    },
    {
      tag: 'sl-icon',
      url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/icon/icon.js',
      isModule: true,
      name: 'reset',
      actionName: 'reset',
    },
  ];

  ngOnInit() {}

  increment1() {
    this.counter1++;
  }

  increment2() {
    this.counter2++;
  }

  performAction(actionName: string) {
    if (actionName === 'increment') {
      this.counter3++;
    }

    if (actionName === 'decrement') {
      this.counter3--;
    }

    if (actionName === 'reset') {
      this.counter3 = 0;
    }
  }
}

export const CODE_EXAMPLE_1 = `<!-- url = 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js' -->;
<ax-lazy-element *axLazyElementDynamic="'sl-button', url: url; module: true"
     variant="primary"
     (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <sl-button variant="primary" (click)="increment()">Increment</sl-button>
-->`;

export const CODE_EXAMPLE_2_HTML = `<ax-lazy-element *axLazyElementDynamic="'wired-button'" (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <wired-button (click)="increment()">Increment</wired-button>
-->`;

export const CODE_EXAMPLE_2_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LazyElementsModule.forFeature(options),
  ]
})
export class FeatureModule {}`;

export const CODE_EXAMPLE_2_STANDALONE = `// pre-configured lazy loaded feature
const configs: ElementConfig[] = [
  { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js' }
];

export default <Routes>[
  {
    path: '',
    providers: [provideAxLazyElementsConfigs(configs)],
    children: [
      {
        path: '',
        component: LazyFeatureComponent,
      },
    ],
  },
];
`;

export const CODE_EXAMPLE_3_HTML = `@for(c of dynamicConfigs; track c.url) {
  <ax-lazy-element
    *axLazyElementDynamic="c.tag; url: c.url; module: c.isModule"
    (click)="performAction(c.actionName)"
    [name]="c.name ? c.name : undefined"
  >
    @if (c.content) {
      {{ c.content }}
    }
  </ax-lazy-element>
}

<!--
dynamicConfigs = [
  {
    tag: 'sl-button',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/button/button.js',
    isModule: true,
    content: 'Increment',
    actionName: 'increment'
  },
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
    content: 'Decrement',
    actionName: 'decrement'
  },
  {
    tag: 'sl-icon',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/icon/icon.js',
    name: 'reset',
    actionName: 'reset'
  }
];
-->
`;
