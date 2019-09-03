import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  codeExampleInline = CODE_EXAMPLE_INLINE;
  codeExampleModule = CODE_EXAMPLE_MODULE;
  codeExamplePreConfigured = CODE_EXAMPLE_PRE_CONFIGURED;

  constructor() {}

  ngOnInit() {}
}

const CODE_EXAMPLE_INLINE = `@Component({
  selector: 'your-org-feature',
  template: \`
    <user-profile-element *axLazyElement="'https://your-org.com/elements/user-profile-element.js'"></user-profile-element>
    <user-profile-element *axLazyElement="'https://your-org.com/elements/user-profile-element.js'"></user-profile-element>
    <user-profile-element *axLazyElement="'https://your-org.com/elements/user-profile-element.js'"></user-profile-element>
  \`
})
export class FeatureComponent {}`;

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
  template: \`
    <user-profile-element *axLazyElement></user-profile-element>
    <user-profile-element *axLazyElement></user-profile-element>
    <user-profile-element *axLazyElement></user-profile-element>
  \`
})
export class FeatureComponent {}`;
