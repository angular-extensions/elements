import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  // example toggles
  example1 = false;
  example2 = false;
  example3 = false;

  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2module = CODE_EXAMPLE_2_MODULE;
  codeExample2html = CODE_EXAMPLE_2_HTML;
  codeExample3html = CODE_EXAMPLE_3_HTML;

  // example state
  buttonTypeIsOutlined = true;
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;

  dynamicConfigs = [
    {
      tag: 'mwc-button',
      url: 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',
      isModule: true,
      content: 'Increment',
      actionName: 'increment',
    },
    {
      tag: 'wired-button',
      url:
        'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
      content: 'Decrement',
      actionName: 'decrement',
    },
    {
      tag: 'mwc-icon',
      url: 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module',
      content: 'replay',
      actionName: 'reset',
    },
  ];

  constructor() {}

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

export const CODE_EXAMPLE_1 = `<!-- url = 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module' -->;
<ax-lazy-element *axLazyElementDynamic="'mwc-button', url: url; module: true"
     [outlined]="true"
     (click)="increment()">
  Increment
</ax-lazy-element>

<!-- will be rendered as ...
  <mwc-button outlined (click)="increment()">Increment</mwc-button>
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

export const CODE_EXAMPLE_3_HTML = `<ng-container *ngFor="let c of dynamicConfigs">
  <ax-lazy-element
    *axLazyElementDynamic="c.tag; url: c.url; module: c.isModule"
    (click)="performAction(c.actionName)"
    raised
  >
    {{ c.content }}
  </ax-lazy-element>
</ng-container>

<!--
dynamicConfigs = [
  {
    tag: 'mwc-button',
    url: 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module',
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
    tag: 'mwc-icon',
    url: 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module',
    content: 'replay',
    actionName: 'reset'
  }
];
-->
`;
