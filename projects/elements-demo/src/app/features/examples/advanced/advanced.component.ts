import { Component, OnInit } from '@angular/core';
import { LazyElementsLoaderService } from './../../../../../../elements/src/lib/lazy-elements/lazy-elements-loader.service';

@Component({
  selector: 'demo-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit {
  // example toggles
  example1 = false;
  example2 = false;
  example3 = false;
  example4 = false;
  example6 = false;
  example7 = false;

  // example code examples
  codeExample1module = CODE_EXAMPLE_1_MODULE;
  codeExample1html = CODE_EXAMPLE_1_HTML;
  codeExample2module = CODE_EXAMPLE_2_MODULE;
  codeExample2html = CODE_EXAMPLE_2_HTML;
  codeExample3module = CODE_EXAMPLE_3_MODULE;
  codeExample3html = CODE_EXAMPLE_3_HTML;
  codeExample4html = CODE_EXAMPLE_4_HTML;
  codeExample4coreModule = CODE_EXAMPLE_4_CORE_MODULE;
  codeExample5html = CODE_EXAMPLE_5_HTML;
  codeExample5ts = CODE_EXAMPLE_5_TS;
  codeExample6html = CODE_EXAMPLE_6_HTML;
  codeExample6module = CODE_EXAMPLE_6_MODULE;
  codeExample7html = CODE_EXAMPLE_7_HTML;
  codeExample7module = CODE_EXAMPLE_7_MODULE;

  // example state
  counter = 0;
  flag = false;

  constructor(private lazyElementLoaderService: LazyElementsLoaderService) {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }

  toggle() {
    this.flag = !this.flag;
  }

  preload() {
    this.lazyElementLoaderService.preload();
  }

  preloadFab() {
    this.lazyElementLoaderService.preload(['mwc-fab']);
  }
}

const CODE_EXAMPLE_1_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'wired-button',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
      loadingComponent: SpinnerComponent,
      errorComponent: ErrorComponent,
      preload: true
    }
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

const CODE_EXAMPLE_1_HTML = `<!-- No need to specify url -->
<wired-button *axLazyElement></wired-button>`;

const CODE_EXAMPLE_2_MODULE = `// pre-configured LazyElementsModule in FeatureModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'mwc-checkbox',
      url: 'https://unpkg.com/@material/mwc-checkbox@0.6.0/mwc-checkbox.js?module'
    }
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

const CODE_EXAMPLE_2_HTML = `<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-checkbox *axLazyElement="null; module: true; loadingTemplate: loading;"></mwc-checkbox>`;

const CODE_EXAMPLE_3_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.6.0/mwc-switch.js?module',
      isModule: true
    }
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

const CODE_EXAMPLE_3_HTML = `<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-switch *axLazyElement="null; loadingTemplate: loading;"></mwc-switch>`;

const CODE_EXAMPLE_4_HTML = `<!-- This can be used in any place in the whole application -->
<mwc-fab icon="code" *axLazyElement></mwc-fab>`;

const CODE_EXAMPLE_4_CORE_MODULE = `// pre-configured LazyElementsModule in CoreModule or AppModule
const options: LazyElementModuleRootOptions = {
  rootOptions: {
    errorComponent: RootErrorComponent
    loadingComponent: RootSpinnerComponent
    isModule: true
  },
  elementConfigs: [
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.6.0/mwc-switch.js?module'
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    LazyElementsModule.forRoot(options),
  ]
})
export class CoreModule { }
`;

const CODE_EXAMPLE_5_HTML = `<button (click)="preload()">Preload</button>`;

const CODE_EXAMPLE_5_TS = `
class PageComponent {
  constructor(private lazyElementLoaderService: LazyElementLoaderService) {}

  preload() {
    this.lazyElementLoaderService.preload();
  }

  preloadFab() {
    this.lazyElementLoaderService.preload(['mwc-fab']);
  }
}
`;

const CODE_EXAMPLE_6_MODULE = `// pre-configured LazyElementsModule
export function beforeLoadHook(tag: string): Promise<void> {
  alert(\`Starting download of \${tag} web component! The download will be artificially postponed for 5 seconds.\`);
  return new Promise(res => setTimeout(res, 5000));
}

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'mwc-slider',
      url: 'https://unpkg.com/@material/mwc-slider@0.14.1/mwc-slider.js?module',
      isModule: true,
      hooks: {
        beforeLoad: beforeLoadHook
      }
      loadingComponent: SpinnerComponent,
      errorComponent: ErrorComponent
    }
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

const CODE_EXAMPLE_6_HTML = `<mwc-slider *axLazyElement></mwc-slider>`;

const CODE_EXAMPLE_7_HTML = `<!-- No need to specify url -->
<wired-toggle *axLazyElement (change)="toggle()"></wired-toggle>`;

const CODE_EXAMPLE_7_MODULE = `export function elementConfigsFactory(): ElementConfig[] {
  // retrieve or construct configs (sync)
  const configs = [
    {
      tag: 'wired-toggle',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js'
    }
  ]
  return configs;
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [FeatureComponent],
  imports: [
    LazyElementsModule.forFeature({
      // some other configs
    }),
  ],
  providers: [
    {
      provide: LAZY_ELEMENT_CONFIGS,
      useFactory: elementConfigsFactory,
      multi: true
    }
  ]
})
export class FeatureModule { }
`;
