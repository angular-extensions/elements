import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  // example toggles
  example1 = false;
  example2 = false;

  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2module = CODE_EXAMPLE_2_MODULE;
  codeExample2html = CODE_EXAMPLE_2_HTML;

  // example state
  counter1 = 0;
  counter2 = 0;

  constructor() {}

  ngOnInit() {}

  increment1() {
    this.counter1++;
  }

  increment2() {
    this.counter2++;
  }
}

export const CODE_EXAMPLE_1 = `<!-- url = 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module' -->;
<div *axLazyElementDynamic="'mwc-button', url: url; module: true"
     outlined
     (click)="increment()">
  Increment
</div>

<!-- will be rendered as ...
  <mwc-button outlined (click)="increment()">Increment</mwc-button>
-->`;

export const CODE_EXAMPLE_2_HTML = `<div *axLazyElementDynamic="'wired-button'" (click)="increment()">
  Increment
</div>

<!-- will be rendered as ...
  <wired-button (click)="increment()">Increment</wired-button>
-->`;

export const CODE_EXAMPLE_2_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    { tag: 'wired-button', url: 'https://unpkg.com/wired-elements@latest/dist/wired-elements.bundled.js' }
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
