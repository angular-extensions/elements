import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { LazyElementDirective } from '@angular-extensions/elements';

import { ExampleComponent } from '../../../shared/example/example.component';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-basic',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  imports: [
    JsonPipe,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatFormFieldModule,
    LazyElementDirective,
    SpinnerComponent,
    ExampleComponent,
    ExampleCodeComponent,
  ],
})
export class BasicComponent {
  // example code examples
  codeExample1 = CODE_EXAMPLE_1;
  codeExample2 = CODE_EXAMPLE_2;
  codeExample3 = CODE_EXAMPLE_3;
  codeExample4 = CODE_EXAMPLE_4;
  codeExample5 = CODE_EXAMPLE_5;
  codeExample5ImportMap = CODE_EXAMPLE_5_IMPORT_MAP;

  // example state
  counter = 0;
  xAxis = [-6.28, 6.28];
  yAxis = [-1, 1];

  increment() {
    this.counter++;
  }

  onSliderChange(value: number) {
    this.xAxis = [-value, value];
  }

  customLoadingErrorHandler(error: ErrorEvent) {
    console.log(
      '[Optional custom loading error handler] Loading failed:',
      error,
    );
  }
}

const CODE_EXAMPLE_1 = `<!-- url = 'https://unpkg.com/@material/mwc-icon@0.27.0/mwc-icon.js?module'; -->
<mwc-icon *axLazyElement="url; module: true">
  favorite
</mwc-icon>`;

const CODE_EXAMPLE_2 = `<!-- url = 'https://unpkg.com/@material/mwc-button@0.27.0/mwc-button.js?module' -->;
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

const CODE_EXAMPLE_4 = `<!-- https://unpkg.com/ink-components' -->;
<!-- xAxis = [-6.28, 6.28] -->;
<ink-chart *axLazyElement="url" [xlim]="xAxis">
  <ink-chart-eqn eqn="Math.sin(x)"></ink-chart-eqn>
</ink-chart>`;

const CODE_EXAMPLE_5 = `<!-- url = 'https://unpkg.com/@material/mwc-switch@0.27.0//mwc-switch.js?module'; -->
<mwc-switch checked *axLazyElement="'mwc-switch'; module: true; importMap: true"></mwc-switch>`;

const CODE_EXAMPLE_5_IMPORT_MAP = `
<script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/6.6.1/system.min.js"></script>
<script type="systemjs-importmap">
  {
    "imports": {
      "mwc-switch": "https://unpkg.com/@material/mwc-switch@0.27.0/mwc-switch.js?module"
    }
  }
</script>`;
