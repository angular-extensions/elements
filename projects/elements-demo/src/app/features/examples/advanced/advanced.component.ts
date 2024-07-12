import {
  Component,
  OnInit,
  inject,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  LazyElementDirective,
  LazyElementsLoaderService,
} from '@angular-extensions/elements';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HighlightModule } from 'ngx-highlightjs';

import { ExampleComponent } from '../../../shared/example/example.component';
import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    HighlightModule,
    LazyElementDirective,
    ExampleComponent,
    ExampleCodeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvancedComponent implements OnInit {
  // example code examples
  codeExample1standalone = CODE_EXAMPLE_1_STANDALONE;
  codeExample1module = CODE_EXAMPLE_1_MODULE;
  codeExample1html = CODE_EXAMPLE_1_HTML;

  codeExample2standalone = CODE_EXAMPLE_2_STANDALONE;
  codeExample2module = CODE_EXAMPLE_2_MODULE;
  codeExample2html = CODE_EXAMPLE_2_HTML;

  codeExample3standalone = CODE_EXAMPLE_3_STANDALONE;
  codeExample3module = CODE_EXAMPLE_3_MODULE;
  codeExample3html = CODE_EXAMPLE_3_HTML;

  codeExample4html = CODE_EXAMPLE_4_HTML;
  codeExample4coreModule = CODE_EXAMPLE_4_CORE_MODULE;
  codeExample4standalone = CODE_EXAMPLE_4_STANDALONE;

  codeExample5html = CODE_EXAMPLE_5_HTML;
  codeExample5ts = CODE_EXAMPLE_5_TS;

  codeExample6html = CODE_EXAMPLE_6_HTML;
  codeExample6module = CODE_EXAMPLE_6_MODULE;
  codeExample6standalone = CODE_EXAMPLE_6_STANDALONE;

  codeExample7standalone = CODE_EXAMPLE_7_STANDALONE;
  codeExample7module = CODE_EXAMPLE_7_MODULE;
  codeExample7html = CODE_EXAMPLE_7_HTML;

  // example state
  counter = 0;
  flag = false;

  private readonly lazyElementLoaderService = inject(LazyElementsLoaderService);

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

const CODE_EXAMPLE_1_STANDALONE = `// pre-configured routes based lazy feature
const configs: ElementConfig[] = [
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
    loadingComponent: SpinnerComponent,
    errorComponent: ErrorComponent,
    preload: true
  }
];

export default <Routes>[
  {
    path: '',
    providers: [
      provideAxLazyElementsConfigs(configs),
    ],
     children: [
      {
        path: ''
        component: LazyFeatureComponent
      }
    ]
  },
];`;
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
      url: 'https://unpkg.com/@material/mwc-checkbox@0.27.0/mwc-checkbox.js?module'
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
const CODE_EXAMPLE_2_STANDALONE = `// pre-configured routes based lazy feature
const configs: ElementConfig[] = [
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/@material/mwc-checkbox@0.27.0/mwc-checkbox.js?module',
  }
];

export default <Routes>[
  {
    path: '',
    providers: [
      provideAxLazyElementsConfigs(configs),
    ],
    children: [
      {
        path: ''
        component: LazyFeatureComponent
      }
    ]
  },
];`;
const CODE_EXAMPLE_2_HTML = `<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-checkbox *axLazyElement="null; module: true; loadingTemplate: loading;"></mwc-checkbox>`;

const CODE_EXAMPLE_3_MODULE = `// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.27.0/mwc-switch.js?module',
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
const CODE_EXAMPLE_3_STANDALONE = `// pre-configured routes based lazy feature
const configs: ElementConfig[] = [
  {
    tag: 'wired-button',
    url: 'https://unpkg.com/@material/mwc-checkbox@0.27.0/mwc-checkbox.js?module',
    isModule: true
  }
];

export default <Routes>[
  {
    path: '',
    providers: [
      provideAxLazyElementsConfigs(configs),
    ],
    children: [
      {
        path: ''
        component: LazyFeatureComponent
      }
    ]
  },
];`;
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
      url: 'https://unpkg.com/@material/mwc-switch@0.27.0/mwc-switch.js?module'
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
const CODE_EXAMPLE_4_STANDALONE = `// pre-configured in main.ts app-config.ts or provideCore() (custom)
bootstrapApplication(AppComponent, {
  providers: [
    // other root providers...
    provideAxLazyElements({
      rootOptions: {
        errorComponent: RootErrorComponent
        loadingComponent: RootSpinnerComponent
        isModule: true
      },
       elementConfigs: [
        {
          tag: 'mwc-switch',
          url: 'https://unpkg.com/@material/mwc-switch@0.27.0/mwc-switch.js?module'
        }
      ]
    }),
  ],
}).catch((err) => console.error(err));`;

const CODE_EXAMPLE_5_HTML = `<button (click)="preload()">Preload</button>`;
const CODE_EXAMPLE_5_TS = `
class LazyFeatureComponent {
  private lazyElementLoaderService = inject(LazyElementLoaderService);

  preload() {
    this.lazyElementLoaderService.preload();
  }

  preloadFab() {
    this.lazyElementLoaderService.preload(['mwc-fab']);
  }
}
`;

const CODE_EXAMPLE_6_STANDALONE = `export function beforeLoadHook(tag: string): Promise<void> {
  alert(\`Starting download of \${tag} web component! The download will be artificially postponed for 5 seconds.\`);
  return new Promise(res => setTimeout(res, 5000));
}

const options: ElementConfig[] = [
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
];


export default <Routes>[
  {
    path: '',
    providers: [provideAxLazyElementsConfigs(configs)],
    children: [
      {
        path: '',
        component: LazyFeatureComponent,
      },
    ],
  },
];`;
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
const CODE_EXAMPLE_7_STANDALONE = `export function elementConfigsFactory(): ElementConfig[] {
  // retrieve or construct configs (sync)
  const configs = [
    {
      tag: 'wired-toggle',
      url: 'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js'
    }
  ]
  return configs;
};

export default <Routes>[
  {
    path: '',
    providers: [
      provideAxLazyElementsConfigs(someOtherConfigs),
      {
        provide: LAZY_ELEMENT_CONFIGS,
        useFactory: elementConfigsFactory,
        multi: true,
      },
    ],
     children: [
      {
        path: ''
        component: LazyFeatureComponent
      }
    ]
  },
];`;
