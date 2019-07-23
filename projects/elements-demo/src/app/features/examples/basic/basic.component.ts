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

  // example state
  counter = 0;

  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2 = CODE_EXAMPLE_2;

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
