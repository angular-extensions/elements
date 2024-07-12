import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  standalone: true,
  imports: [RouterLink, HighlightModule, ExampleCodeComponent],
})
export class HowItWorksComponent implements OnInit {
  codeExampleComponent = CODE_EXAMPLE_COMPONENT;
  codeExampleComponentBinding = CODE_EXAMPLE_COMPONENT_BINDING;
  codeExampleComponentLazy = CODE_EXAMPLE_COMPONENT_LAZY;

  ngOnInit() {}
}

const CODE_EXAMPLE_COMPONENT = `import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <your-org-customer-editor *axLazyElement="url"></your-org-customer-editor>
  \`
})
export class FeatureComponent {
  url = 'path/to/your-org-customer-editor.js';
}
`;

const CODE_EXAMPLE_COMPONENT_LAZY = `import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <ng-container *ngIf="showEditor">
      <your-org-customer-editor *axLazyElement="url"></your-org-customer-editor>
    </ng-container>
    <button (click)="toggleShowEditor()">Edit customer</button>
  \`
})
export class FeatureComponent {
  showEditor = false;

  url = 'path/to/your-org-customer-editor.js';

  toggleShowEditor() {
    this.showEditor = !showEditor;
  }
}
`;

const CODE_EXAMPLE_COMPONENT_BINDING = `import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <your-org-customer-editor *axLazyElement="url"
      [customerId]="customerId"
      (customerDataChange)="handleCustomerDataChange($event)">
    </your-org-customer-editor>
  \`
})
export class FeatureComponent {
  url = 'path/to/your-org-customer-editor.js';

  customerId = 'C-123-456';

  handleCustomerDataChange(change) {
    // handle change ...
  }
}
`;
