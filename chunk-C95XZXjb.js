import{Dt as Rh,Ht as Uu,In as jw,Jn as nw,Lt as Tw,M as GI,Nn as jD,Tn as gI,W as Ii,Y as Ji,a as $u,cn as _h,gr as xd,m as Bh,mt as Oh,nr as qu,rn as ZI,s as Ad,wn as g,wr as zu}from"./chunk-C4_gtfUn.js";import"./chunk-BelJIGP0.js";import"./chunk-DkaxpU-d.js";import"./chunk-B2P_CqHU.js";import{a as he$1,c as yt,d as b,f as gn,g as ye$1,h as le$1,p as hn,t as Dt,u as S}from"./main-UNIKYDVJ.js";import{t as Nn}from"./chunk-D8LWnu7z.js";import{t as J$1}from"./chunk-CWFdhYdy.js";import{t as z}from"./chunk-CV8UQZau.js";function U(o,d){if(o&1){let l=GI();Ji(0,`wired-button`,26),Bh(`click`,function(){xd(l);return Ad(ZI(2).increment())}),Tw(1,` Click me `),Uu()}}function I(o,d){if(o&1&&(_h(0,U,2,0,`wired-button`,25),Ji(1,`p`),Tw(2),Uu()),o&2){let l=ZI();jD(2),qu(`Counter: `,l.counter())}}function q(o,d){if(o&1){let l=GI();Ji(0,`wired-toggle`,28),Bh(`change`,function(){xd(l);return Ad(ZI(2).toggle())}),Tw(1,` Toggle me `),Uu()}}function V(o,d){if(o&1&&(_h(0,q,2,0,`wired-toggle`,27),Ji(1,`p`),Tw(2),Uu()),o&2){let l=ZI();jD(2),qu(`Value: `,l.flag())}}function G(o,d){o&1&&Tw(0,`Loading...`)}function W(o,d){o&1&&(Ji(0,`sl-checkbox`),Tw(1,` Click me `),Uu())}function Y(o,d){if(o&1&&_h(0,G,1,0,`ng-template`,null,0,jw)(2,W,2,0,`sl-checkbox`,29),o&2){let l=nw(1);jD(2),Rh(`axLazyElement`,null)(`axLazyElementModule`,!0)(`axLazyElementLoadingTemplate`,l)}}function Z(o,d){o&1&&Tw(0,`Loading...`)}function B(o,d){o&1&&(Ji(0,`sl-switch`),Tw(1,` Click me `),Uu())}function $(o,d){if(o&1&&_h(0,Z,1,0,`ng-template`,null,0,jw)(2,B,2,0,`sl-switch`,30),o&2){let l=nw(1);jD(2),Rh(`axLazyElement`,null)(`axLazyElementLoadingTemplate`,l)}}function Q(o,d){o&1&&Oh(0,`sl-avatar`)}function J(o,d){o&1&&_h(0,Q,1,0,`sl-avatar`,31)}function K(o,d){o&1&&Oh(0,`sl-range`)}function ee(o,d){o&1&&_h(0,K,1,0,`sl-range`,31)}var H=(()=>{class o{codeExample1standalone=te;codeExample1module=ne;codeExample1html=oe;codeExample2standalone=le;codeExample2module=ie;codeExample2html=ae;codeExample3standalone=de;codeExample3module=re;codeExample3html=me;codeExample4html=pe;codeExample4coreModule=se;codeExample4standalone=ce;codeExample5html=ue;codeExample5ts=Ee;codeExample6html=fe;codeExample6module=xe;codeExample6standalone=ge;codeExample7standalone=Ce;codeExample7module=he;codeExample7html=_e;counter=Ii(0);flag=Ii(!1);lazyElementLoaderService=g(b);increment(){this.counter.update(l=>l+1)}toggle(){this.flag.update(l=>!l)}preload(){this.lazyElementLoaderService.preload()}preloadSome(){this.lazyElementLoaderService.preload([`sl-avatar`])}static ɵfac=function(p){return new(p||o)};static ɵcmp=gI({type:o,selectors:[[`demo-advanced`]],decls:168,vars:20,consts:[[`loading`,``],[1,`quick-nav`],[`routerLink`,`.`,`fragment`,`feature-module-pre-configuration`],[`routerLink`,`.`,`fragment`,`feature-module-dynamic-pre-configuration`],[`routerLink`,`.`,`fragment`,`inline-options`],[`routerLink`,`.`,`fragment`,`is-module-option`],[`routerLink`,`.`,`fragment`,`global-pre-configuration`],[`routerLink`,`.`,`fragment`,`preloading`],[`routerLink`,`.`,`fragment`,`hooks`],[1,`wrapper`],[`id`,`feature-module-pre-configuration`],[1,`content`],[1,`description`],[`language`,`html`,3,`example`],[3,`example`,`exampleModule`],[`id`,`feature-module-dynamic-pre-configuration`],[`id`,`inline-options`],[`id`,`is-module-option`],[`id`,`global-pre-configuration`],[`id`,`preloading`],[2,`margin`,`20px 0`],[`mat-flat-button`,``,`color`,`accent`,3,`click`],[`mat-flat-button`,``,`color`,`accent`,1,`additional-btn`,3,`click`],[3,`example`],[`id`,`hooks`],[3,`click`,4,`axLazyElement`],[3,`click`],[3,`change`,4,`axLazyElement`],[3,`change`],[4,`axLazyElement`,`axLazyElementModule`,`axLazyElementLoadingTemplate`],[4,`axLazyElement`,`axLazyElementLoadingTemplate`],[4,`axLazyElement`]],template:function(p,i){p&1&&(Ji(0,`div`,1)(1,`h3`),Tw(2,`Quick navigation`),Uu(),Ji(3,`ul`)(4,`li`)(5,`a`,2),Tw(6,` Lazy loaded feature pre-configuration `),Uu()(),Ji(7,`li`)(8,`a`,3),Tw(9,` Lazy loaded feature dynamic pre-configuration `),Uu()(),Ji(10,`li`)(11,`a`,4),Tw(12,` Pre-configuration with inline options `),Uu()(),Ji(13,`li`)(14,`a`,5),Tw(15,`The "isModule" option`),Uu()(),Ji(16,`li`)(17,`a`,6),Tw(18,` Global pre-configuration `),Uu()(),Ji(19,`li`)(20,`a`,7),Tw(21,`Element pre-loading`),Uu()(),Ji(22,`li`)(23,`a`,8),Tw(24,`Hooks`),Uu()()()(),Ji(25,`div`,9)(26,`h1`),Tw(27,`Advanced`),Uu(),Ji(28,`h2`,10),Tw(29,` Elements configured in a Lazy loaded feature `),Uu(),Ji(30,`div`,11)(31,`demo-example`),_h(32,I,3,1,`ng-template`),Uu(),Ji(33,`div`,12)(34,`p`),Tw(35,` In this example we're pre-configuring library with the element config. That way we don't have to specify url of the element in the `),Ji(36,`code`),Tw(37,`*axLazyElement`),Uu(),Tw(38,` directive. The element will be lazy-loaded the same way as if we specified url directly. `),Uu(),Oh(39,`demo-example-code`,13)(40,`demo-example-code`,14),Uu()(),Ji(41,`h2`,15),Tw(42,` Dynamic configuration resolved at runtime `),Uu(),Ji(43,`div`,11)(44,`demo-example`),_h(45,V,3,1,`ng-template`),Uu(),Ji(46,`div`,12)(47,`p`),Tw(48,` In this example we're pre-configuring `),Ji(49,`code`),Tw(50,`LazyElementsModule`),Uu(),Tw(51,` with the element config that is provided during runtime. We're using `),Ji(52,`code`),Tw(53,`LAZY_ELEMENT_CONFIGS`),Uu(),Tw(54,` token as a multi provider with a custom factory function. `),Uu(),Oh(55,`demo-example-code`,13)(56,`demo-example-code`,14),Uu()(),Ji(57,`h2`,16),Tw(58,` Elements configured in a Lazy loaded feature with HTML inline options `),Uu(),Ji(59,`div`,11)(60,`demo-example`),_h(61,Y,3,3,`ng-template`),Uu(),Ji(62,`div`,12)(63,`p`),Tw(64,` We don't have to specify `),Ji(65,`code`),Tw(66,`url`),Uu(),Tw(67,` when using pre-configured `),Ji(68,`code`),Tw(69,`LazyElementsModule`),Uu(),Tw(70,` . We still might need to pass in `),Ji(71,`code`),Tw(72,`null`),Uu(),Tw(73,` url into `),Ji(74,`code`),Tw(75,`*axLazyElement`),Uu(),Tw(76,` directive in case we want to use other options like `),Ji(77,`code`),Tw(78,`module`),Uu(),Tw(79,` or `),Ji(80,`code`),Tw(81,`loadingTemplate`),Uu(),Tw(82,` . `),Uu(),Oh(83,`demo-example-code`,13)(84,`demo-example-code`,14),Uu()(),Ji(85,`h2`,17),Tw(86,` Elements configured in a Lazy loaded feature with `),Ji(87,`code`),Tw(88,`isModule`),Uu(),Tw(89,` option `),Uu(),Ji(90,`div`,11)(91,`demo-example`),_h(92,$,3,2,`ng-template`),Uu(),Ji(93,`div`,12)(94,`p`),Tw(95,` We can also pre-configure `),Ji(96,`code`),Tw(97,`isModule`),Uu(),Tw(98,` flag by passing it to the `),Ji(99,`code`),Tw(100,`LazyElementsModule`),Uu(),Tw(101,` config. That way we don't have to specify it in the template for module style elements! `),Uu(),Oh(102,`demo-example-code`,13)(103,`demo-example-code`,14),Uu()(),Ji(104,`h2`,18),Tw(105,`Global preconfiguration`),Uu(),Ji(106,`div`,11)(107,`demo-example`),_h(108,J,1,0,`ng-template`),Uu(),Ji(109,`div`,12)(110,`p`),Tw(111,` Some options can be pre-configured for the whole application using `),Ji(112,`code`),Tw(113,`LazyElementsModule.forRoot()`),Uu(),Tw(114,` . This is usually done in `),Ji(115,`code`),Tw(116,`AppModule`),Uu(),Tw(117,` or in the `),Ji(118,`code`),Tw(119,`CoreModule`),Uu(),Tw(120,` . That way we don't have to specify this options in the Lazy loaded features while still preserving posibility to override them if necessary. The `),Ji(121,`code`),Tw(122,`forRoot()`),Uu(),Tw(123,` accepts also `),Ji(124,`code`),Tw(125,`elementConfigs`),Uu(),Tw(126,` so they can be pre-configured centrally removing the need to configure them in Lazy loaded features or inline in the templates. `),Uu(),Oh(127,`demo-example-code`,13)(128,`demo-example-code`,14),Uu()(),Ji(129,`h2`,19),Tw(130,`Preloading`),Uu(),Ji(131,`div`,11)(132,`div`,20)(133,`button`,21),Bh(`click`,function(){return i.preload()}),Tw(134,` Preload everything `),Uu(),Tw(135,` \xA0 `),Ji(136,`button`,22),Bh(`click`,function(){return i.preloadSome()}),Tw(137,` Preload "sl-avatar" only (the previous example) `),Uu()(),Ji(138,`div`,12)(139,`p`),Tw(140,` You can inject `),Ji(141,`code`),Tw(142,`LazyElementLoaderService`),Uu(),Tw(143,` and call the `),Ji(144,`code`),Tw(145,`preload`),Uu(),Tw(146,` method to preload all the configured modules, or specify the list of `),Ji(147,`code`),Tw(148,`tags`),Uu(),Tw(149,` you want to preload. You can try to refresh the page, preload elements and then try previous examples. Notice how they show elements immediately (depending on the newtrowk conditions ) because they were pre-loaded! Check out the dev tools network tab to see it in action... `),Uu(),Oh(150,`demo-example-code`,13)(151,`demo-example-code`,23),Uu()(),Ji(152,`h2`,24),Tw(153,`Hooks`),Uu(),Ji(154,`div`,11)(155,`demo-example`),_h(156,ee,1,0,`ng-template`),Uu(),Ji(157,`div`,12)(158,`p`),Tw(159,` By providing hooks in `),Ji(160,`code`),Tw(161,`ElementConfig`),Uu(),Tw(162,` or `),Ji(163,`code`),Tw(164,`LazyElementRootOptions`),Uu(),Tw(165,` you can run custom logic after certain points in the element's lifecycle. Clicking the run button below will trigger the download of the custom element which has been configured with a hook. `),Uu(),Oh(166,`demo-example-code`,13)(167,`demo-example-code`,14),Uu()()()),p&2&&(jD(39),Rh(`example`,i.codeExample1html),jD(),Rh(`example`,i.codeExample1standalone)(`exampleModule`,i.codeExample1module),jD(15),Rh(`example`,i.codeExample7html),jD(),Rh(`example`,i.codeExample7standalone)(`exampleModule`,i.codeExample7module),jD(27),Rh(`example`,i.codeExample2html),jD(),Rh(`example`,i.codeExample2standalone)(`exampleModule`,i.codeExample2module),jD(18),Rh(`example`,i.codeExample3html),jD(),Rh(`example`,i.codeExample3standalone)(`exampleModule`,i.codeExample3module),jD(24),Rh(`example`,i.codeExample4html),jD(),Rh(`example`,i.codeExample4standalone)(`exampleModule`,i.codeExample4coreModule),jD(22),Rh(`example`,i.codeExample5html),jD(),Rh(`example`,i.codeExample5ts),jD(15),Rh(`example`,i.codeExample6html),jD(),Rh(`example`,i.codeExample6standalone)(`exampleModule`,i.codeExample6module))},dependencies:[Dt,yt,hn,gn,he$1,ye$1,z,Nn],styles:[`[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}`]})}return o})();var te=`// pre-configured routes based lazy feature
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
];`;var ne=`// pre-configured LazyElementsModule
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
`;var oe=`<!-- No need to specify url -->
<wired-button *axLazyElement></wired-button>`;var ie=`// pre-configured LazyElementsModule in FeatureModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'sl-checkbox',
      url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/checkbox/checkbox.js'
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
`;var le=`// pre-configured routes based lazy feature
const configs: ElementConfig[] = [
  {
    tag: 'sl-checkbox',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/checkbox/checkbox.js',
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
];`;var ae=`<!-- We have to specify null; url to be able to pass in additional options -->
<sl-checkbox *axLazyElement="null; module: true; loadingTemplate: loading;"></sl-checkbox>`;var re=`// pre-configured LazyElementsModule
const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'sl-switch',
      url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/switch/switch.js',
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
`;var de=`// pre-configured routes based lazy feature
const configs: ElementConfig[] = [
  {
    tag: 'sl-switch',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/switch/switch.js',
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
];`;var me=`<!-- We have to specify null; url to be able to pass in additional options -->
<sl-switch *axLazyElement="null; loadingTemplate: loading;"></sl-switch>`;var pe=`<!-- This can be used in any place in the whole application -->
<sl-avatar *axLazyElement></sl-avatar>`;var se=`// pre-configured LazyElementsModule in CoreModule or AppModule
const options: LazyElementModuleRootOptions = {
  rootOptions: {
    errorComponent: RootErrorComponent
    loadingComponent: RootSpinnerComponent
    isModule: true
  },
  elementConfigs: [
    {
      tag: 'sl-avatar',
      url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/avatar/avatar.js'
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
`;var ce=`// pre-configured in main.ts app-config.ts or provideCore() (custom)
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
          tag: 'sl-avatar',
          url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/avatar/avatar.js'
        }
      ]
    }),
  ],
}).catch((err) => console.error(err));`;var ue=`<button (click)="preload()">Preload</button>`;var Ee=`
class LazyFeatureComponent {
  private lazyElementLoaderService = inject(LazyElementLoaderService);

  preload() {
    this.lazyElementLoaderService.preload();
  }

  preloadFab() {
    this.lazyElementLoaderService.preload(['sl-avatar']);
  }
}
`;var ge=`export function beforeLoadHook(tag: string): Promise<void> {
  alert(\`Starting download of \${tag} web component! The download will be artificially postponed for 5 seconds.\`);
  return new Promise(res => setTimeout(res, 5000));
}

const options: ElementConfig[] = [
  {
    tag: 'sl-range',
    url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/range/range.js',
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
];`;var xe=`// pre-configured LazyElementsModule
export function beforeLoadHook(tag: string): Promise<void> {
  alert(\`Starting download of \${tag} web component! The download will be artificially postponed for 5 seconds.\`);
  return new Promise(res => setTimeout(res, 5000));
}

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'sl-range',
      url: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/range/range.js',
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
`;var fe=`<sl-range *axLazyElement></sl-range>`;var _e=`<!-- No need to specify url -->
<wired-toggle *axLazyElement (change)="toggle()"></wired-toggle>`;var he=`export function elementConfigsFactory(): ElementConfig[] {
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
`;var Ce=`export function elementConfigsFactory(): ElementConfig[] {
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
];`;var M=(()=>{class o{ngOnInit(){}static ɵfac=function(p){return new(p||o)};static ɵcmp=gI({type:o,selectors:[[`demo-error`]],decls:2,vars:0,template:function(p,i){p&1&&($u(0,`p`),Tw(1,`Loading failed ⚠️...`),zu())},encapsulation:2})}return o})();function ye(o){return alert(`Starting download of ${o} web component! The download will be artificially postponed for 5 seconds.`),new Promise(d=>setTimeout(d,5e3))}function ve(){return[{tag:`wired-toggle`,url:`https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js`,loadingComponent:J$1,errorComponent:M}]}var Ue=[{path:``,providers:[le$1([{tag:`wired-button`,url:`https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js`,loadingComponent:J$1,errorComponent:M,preload:!0},{tag:`sl-switch`,url:`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/switch/switch.js`,isModule:!0},{tag:`sl-checkbox`,url:`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/checkbox/checkbox.js`,isModule:!0},{tag:`sl-avatar`,url:`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/avatar/avatar.js`,isModule:!0,loadingComponent:J$1},{tag:`sl-range`,url:`https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.3.0/dist/components/range/range.js`,isModule:!0,hooks:{beforeLoad:ye}}]),{provide:S,useFactory:ve,multi:!0}],children:[{path:``,component:H}]}];export{ye as beforeLoadHook,Ue as default,ve as elementConfigsFactory};