import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
  imports: [RouterLink, HighlightModule, ExampleCodeComponent],
})
export class HowItWorksComponent implements OnInit {
  readonly codeExampleComponent = CODE_EXAMPLE_COMPONENT;
  readonly codeExampleComponentBinding = CODE_EXAMPLE_COMPONENT_BINDING;
  readonly codeExampleComponentLazy = CODE_EXAMPLE_COMPONENT_LAZY;

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
  readonly url = 'path/to/your-org-customer-editor.js';
}
`;

const CODE_EXAMPLE_COMPONENT_LAZY = `import { Component, signal } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    @if(showEditor()) {
      <your-org-customer-editor *axLazyElement="url"></your-org-customer-editor>
    }
    <button (click)="toggleShowEditor()">Edit customer</button>
  \`
})
export class FeatureComponent {
  readonly showEditor = signal(false);

  readonly url = 'path/to/your-org-customer-editor.js';

  toggleShowEditor() {
    this.showEditor.update((showEditor) => !showEditor);
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
  readonly url = 'path/to/your-org-customer-editor.js';

  readonly customerId = 'C-123-456';

  handleCustomerDataChange(change) {
    // handle change ...
  }
}
`;
