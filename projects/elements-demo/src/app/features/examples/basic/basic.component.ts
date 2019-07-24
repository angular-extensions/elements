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

  // example state
  counter = 0;
  customYearValues = [2020, 2030, 2040];

  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2 = CODE_EXAMPLE_2;
  codeExample3 = CODE_EXAMPLE_3;
  codeExample4 = CODE_EXAMPLE_4;

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

const CODE_EXAMPLE_4 = `<!-- url = 'https://unpkg.com/@ionic/core@4.6.2/dist/ionic/ionic.js' -->;
<!-- customYearValues = [2020, 2030, 2040] -->;
<ion-item *axLazyElement="url">
  <ion-label>Pick a year</ion-label>
  <ion-datetime
    [displayFormat]="'YYYY'"
    [pickerFormat]="'YYYY'"
    [yearValues]="customYearValues"
  >
  </ion-datetime>
</ion-item>`;
