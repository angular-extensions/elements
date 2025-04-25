import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  imports: [RouterLink, HighlightModule, ExampleCodeComponent],
})
export class ConfigurationComponent implements OnInit {
  codeExampleInline = CODE_EXAMPLE_INLINE;
  codeExampleModule = CODE_EXAMPLE_MODULE;
  codeExampleStandalone = CODE_EXAMPLE_STANDALONE;
  codeExamplePreConfigured = CODE_EXAMPLE_PRE_CONFIGURED;

  ngOnInit() {}
}

const CODE_EXAMPLE_INLINE = `@Component({

  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <user-profile-element *axLazyElement="'https://your-org.com/elements/user-profile-element.js'"></user-profile-element>
    <user-profile-element *axLazyElement="'https://your-org.com/elements/user-profile-element.js'"></user-profile-element>
    <user-profile-element *axLazyElement="'https://your-org.com/elements/user-profile-element.js'"></user-profile-element>
  \`
})
export class FeatureComponent {}`;

const CODE_EXAMPLE_STANDALONE = `// pre-configured route based lazy feature
const configs: ElementConfig[] = [
  { tag: 'user-profile-element', url: 'https://your-org.com/elements/user-profile-element.js' }
  { tag: 'some-other-element', url: 'https://your-org.com/elements/some-other-element.js' }
];

export default <Routes>[
  {
    path: '',
    providers: [provideAxLazyElementsConfigs(configs)],
    children: [
      {
        path: '',
        component: FeatureComponent,
      },
    ],
  },
];`;
const CODE_EXAMPLE_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    { tag: 'user-profile-element', url: 'https://your-org.com/elements/user-profile-element.js' }
    { tag: 'some-other-element', url: 'https://your-org.com/elements/some-other-element.js' }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LazyElementsModule.forFeature(options),
  ]
})
export class FeatureModule { }
`;

const CODE_EXAMPLE_PRE_CONFIGURED = `@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <user-profile-element *axLazyElement></user-profile-element>
    <user-profile-element *axLazyElement></user-profile-element>
    <user-profile-element *axLazyElement></user-profile-element>
  \`
})
export class FeatureComponent {}`;
