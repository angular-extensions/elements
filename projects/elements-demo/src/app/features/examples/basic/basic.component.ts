import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  // example toggles
  example1 = false;
  example2 = false;
  example3 = false;
  example4 = false;
  example5 = false;

  // example state
  counter = 0;
  customYearValues = [2020, 2030, 2040];

  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2 = CODE_EXAMPLE_2;
  codeExample3 = CODE_EXAMPLE_3;
  codeExample4TS = CODE_EXAMPLE_4_TS;
  codeExample4HTML = CODE_EXAMPLE_4_HTML;
  codeExample5TS = CODE_EXAMPLE_5_TS;
  codeExample5HTML = CODE_EXAMPLE_5_HTML;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
}

const CODE_EXAMPLE_1 = `<!-- url = 'https://unpkg.com/@material/mwc-icon@0.6.0/mwc-icon.js?module'; -->
<mwc-icon *axLazyElement="url; module: true">
  favorite
</mwc-icon>`;

const CODE_EXAMPLE_2 = `<!-- url = 'https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module' -->;
<ng-template #loading>Loading...</ng-template>
<mwc-button *axLazyElement="url; loadingTemplate: loading; module: true"
            (click)="increment()">
  Increment
</mwc-button>`;

const CODE_EXAMPLE_3 = `<!-- url = 'https://unpkg.com/wrong-url.js?module' -->;
<ng-template #error>Loading failed...</ng-template>
<mwc-button *axLazyElement="url; errorTemplate: error; module: true">
  Submit
</mwc-button>`;

const CODE_EXAMPLE_4_TS = `// url = 'https://unpkg.com/@ionic/core@4.6.2/dist/ionic/ionic.js';
LazyElementsModule.forRoot([{
  tag: 'ion-item',
  url
}])`;

const CODE_EXAMPLE_4_HTML = `<!-- customYearValues = [2020, 2030, 2040] -->;
<ion-item *axLazyElement>
  <ion-label>Pick a year</ion-label>
  <ion-datetime
    [displayFormat]="'YYYY'"
    [pickerFormat]="'YYYY'"
    [yearValues]="customYearValues"
  >
  </ion-datetime>
</ion-item>`;

const CODE_EXAMPLE_5_TS = `// url = 'https://unpkg.com/@deckdeckgo/qrcode@1.0.0-alpha.9/dist/deckdeckgo-qrcode/deckdeckgo-qrcode.js';
LazyElementsModule.forFeature([{
  tag: 'deckgo-qrcode',
  url,
}])`;

const CODE_EXAMPLE_5_HTML = `<deckgo-qrcode *axLazyElement content="https://angular-extensions.github.io/elements" style="--deckgo-qrcode-size: 300px;">
</deckgo-qrcode>`;
