import { Component, OnInit } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss'],
  standalone: true,
  imports: [HighlightModule, ExampleCodeComponent],
})
export class GettingStartedComponent implements OnInit {
  codeExampleComponent = CODE_EXAMPLE_COMPONENT;
  codeExampleModule = CODE_EXAMPLE_MODULE;
  codeExampleAppConfig = CODE_EXAMPLE_APP_CONFIG;
  codeExampleAppModule = CODE_EXAMPLE_APP_MODULE;
  codeExampleSharedModule = CODE_EXAMPLE_SHARED_MODULE;

  ngOnInit() {}
}

const CODE_EXAMPLE_COMPONENT = `import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <some-element *axLazyElement="elementUrl"></some-element>
  \`
})
export class FeatureComponent {
  elementUrl = 'https://your-org.com/elements/some-element.js';
}
`;

const CODE_EXAMPLE_MODULE = `import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementsModule } from '@angular-extensions/elements';

import { FeatureComponent } from './feature-component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]
  declarations: [FeatureComponent]
})
export class FeatureModule {}
`;

const CODE_EXAMPLE_APP_CONFIG = `export const appConfig: ApplicationConfig = {
  providers: [
    // other providers...
    provideAxLazyElements(),
  ]
);
`;

const CODE_EXAMPLE_APP_MODULE = `import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, LazyElementsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
`;

const CODE_EXAMPLE_SHARED_MODULE = `import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  imports: [CommonModule, LazyElementsModule],
  exports: [CommonModule, LazyElementsModule]
})
export class SharedModule {}
`;
