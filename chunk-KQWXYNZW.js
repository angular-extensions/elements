import{a as g}from"./chunk-TFIA3M5T.js";import{a as F}from"./chunk-XYXOHDRX.js";import{a as L,c as v,d as S,g as b,k,m as O}from"./chunk-3JWQQDNO.js";import{c as A}from"./chunk-PWZGNLBO.js";import{a as P}from"./chunk-DDLRTDXN.js";import"./chunk-SULMHPBA.js";import"./chunk-QUZ3G4VO.js";import{c as T}from"./chunk-DOB4G2OH.js";import"./chunk-V632RBP4.js";import{c as z}from"./chunk-NELZ564J.js";import"./chunk-KOHBDHAI.js";import{Hb as n,Ib as t,Jb as p,Lb as _,Nb as s,Ob as u,Xb as h,Yb as e,_b as C,bb as l,ca as M,fc as w,na as f,nb as E,oa as x,rb as d,yb as a}from"./chunk-P7DSPICV.js";import"./chunk-EQDQRRRY.js";function j(o,r){if(o&1){let m=_();n(0,"wired-button",26),s("click",function(){f(m);let i=u(2);return x(i.increment())}),e(1," Click me "),t()}}function X(o,r){if(o&1&&(d(0,j,2,0,"wired-button",25),n(1,"p"),e(2),t()),o&2){let m=u();l(2),C("Counter: ",m.counter,"")}}function R(o,r){if(o&1){let m=_();n(0,"wired-toggle",28),s("change",function(){f(m);let i=u(2);return x(i.toggle())}),e(1," Toggle me "),t()}}function U(o,r){if(o&1&&(d(0,R,2,0,"wired-toggle",27),n(1,"p"),e(2),t()),o&2){let m=u();l(2),C("Value: ",m.flag,"")}}function I(o,r){o&1&&e(0,"Loading...")}function q(o,r){o&1&&(n(0,"mwc-checkbox"),e(1," Click me "),t())}function V(o,r){if(o&1&&d(0,I,1,0,"ng-template",null,0,w)(2,q,2,0,"mwc-checkbox",29),o&2){let m=h(1);l(2),a("axLazyElement",null)("axLazyElementModule",!0)("axLazyElementLoadingTemplate",m)}}function G(o,r){o&1&&e(0,"Loading...")}function W(o,r){o&1&&(n(0,"mwc-switch"),e(1," Click me "),t())}function Y(o,r){if(o&1&&d(0,G,1,0,"ng-template",null,0,w)(2,W,2,0,"mwc-switch",30),o&2){let m=h(1);l(2),a("axLazyElement",null)("axLazyElementLoadingTemplate",m)}}function Z(o,r){o&1&&p(0,"mwc-fab",32)}function B(o,r){o&1&&d(0,Z,1,0,"mwc-fab",31)}function $(o,r){o&1&&p(0,"mwc-slider")}function Q(o,r){o&1&&d(0,$,1,0,"mwc-slider",33)}var D=(()=>{class o{codeExample1standalone=J;codeExample1module=K;codeExample1html=ee;codeExample2standalone=ne;codeExample2module=te;codeExample2html=oe;codeExample3standalone=le;codeExample3module=ie;codeExample3html=ae;codeExample4html=re;codeExample4coreModule=me;codeExample4standalone=de;codeExample5html=ce;codeExample5ts=pe;codeExample6html=Ee;codeExample6module=ue;codeExample6standalone=se;codeExample7standalone=xe;codeExample7module=fe;codeExample7html=ge;counter=0;flag=!1;lazyElementLoaderService=M(v);ngOnInit(){}increment(){this.counter++}toggle(){this.flag=!this.flag}preload(){this.lazyElementLoaderService.preload()}preloadFab(){this.lazyElementLoaderService.preload(["mwc-fab"])}static \u0275fac=function(c){return new(c||o)};static \u0275cmp=E({type:o,selectors:[["demo-advanced"]],decls:168,vars:20,consts:[["loading",""],[1,"quick-nav"],["routerLink",".","fragment","feature-module-pre-configuration"],["routerLink",".","fragment","feature-module-dynamic-pre-configuration"],["routerLink",".","fragment","inline-options"],["routerLink",".","fragment","is-module-option"],["routerLink",".","fragment","global-pre-configuration"],["routerLink",".","fragment","preloading"],["routerLink",".","fragment","hooks"],[1,"wrapper"],["id","feature-module-pre-configuration"],[1,"content"],[1,"description"],["language","html",3,"example"],[3,"example","exampleModule"],["id","feature-module-dynamic-pre-configuration"],["id","inline-options"],["id","is-module-option"],["id","global-pre-configuration"],["id","preloading"],[2,"margin","20px 0"],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","accent",1,"additional-btn",3,"click"],[3,"example"],["id","hooks"],[3,"click",4,"axLazyElement"],[3,"click"],[3,"change",4,"axLazyElement"],[3,"change"],[4,"axLazyElement","axLazyElementModule","axLazyElementLoadingTemplate"],[4,"axLazyElement","axLazyElementLoadingTemplate"],["icon","code",4,"axLazyElement"],["icon","code"],[4,"axLazyElement"]],template:function(c,i){c&1&&(n(0,"div",1)(1,"h3"),e(2,"Quick navigation"),t(),n(3,"ul")(4,"li")(5,"a",2),e(6," Lazy loaded feature pre-configuration "),t()(),n(7,"li")(8,"a",3),e(9," Lazy loaded feature dynamic pre-configuration "),t()(),n(10,"li")(11,"a",4),e(12," Pre-configuration with inline options "),t()(),n(13,"li")(14,"a",5),e(15,'The "isModule" option'),t()(),n(16,"li")(17,"a",6),e(18," Global pre-configuration "),t()(),n(19,"li")(20,"a",7),e(21,"Element pre-loading"),t()(),n(22,"li")(23,"a",8),e(24,"Hooks"),t()()()(),n(25,"div",9)(26,"h1"),e(27,"Advanced"),t(),n(28,"h2",10),e(29," Elements configured in a Lazy loaded feature "),t(),n(30,"div",11)(31,"demo-example"),d(32,X,3,1,"ng-template"),t(),n(33,"div",12)(34,"p"),e(35," In this example we're pre-configuring library with the element config. That way we don't have to specify url of the element in the "),n(36,"code"),e(37,"*axLazyElement"),t(),e(38," directive. The element will be lazy-loaded the same way as if we specified url directly. "),t(),p(39,"demo-example-code",13)(40,"demo-example-code",14),t()(),n(41,"h2",15),e(42," Dynamic configuration resolved at runtime "),t(),n(43,"div",11)(44,"demo-example"),d(45,U,3,1,"ng-template"),t(),n(46,"div",12)(47,"p"),e(48," In this example we're pre-configuring "),n(49,"code"),e(50,"LazyElementsModule"),t(),e(51," with the element config that is provided during runtime. We're using "),n(52,"code"),e(53,"LAZY_ELEMENT_CONFIGS"),t(),e(54," token as a multi provider with a custom factory function. "),t(),p(55,"demo-example-code",13)(56,"demo-example-code",14),t()(),n(57,"h2",16),e(58," Elements configured in a Lazy loaded feature with HTML inline options "),t(),n(59,"div",11)(60,"demo-example"),d(61,V,3,3,"ng-template"),t(),n(62,"div",12)(63,"p"),e(64," We don't have to specify "),n(65,"code"),e(66,"url"),t(),e(67," when using pre-configured "),n(68,"code"),e(69,"LazyElementsModule"),t(),e(70," . We still might need to pass in "),n(71,"code"),e(72,"null"),t(),e(73," url into "),n(74,"code"),e(75,"*axLazyElement"),t(),e(76," directive in case we want to use other options like "),n(77,"code"),e(78,"module"),t(),e(79," or "),n(80,"code"),e(81,"loadingTemplate"),t(),e(82," . "),t(),p(83,"demo-example-code",13)(84,"demo-example-code",14),t()(),n(85,"h2",17),e(86," Elements configured in a Lazy loaded feature with "),n(87,"code"),e(88,"isModule"),t(),e(89," option "),t(),n(90,"div",11)(91,"demo-example"),d(92,Y,3,2,"ng-template"),t(),n(93,"div",12)(94,"p"),e(95," We can also pre-configure "),n(96,"code"),e(97,"isModule"),t(),e(98," flag by passing it to the "),n(99,"code"),e(100,"LazyElementsModule"),t(),e(101," config. That way we don't have to specify it in the template for module style elements! "),t(),p(102,"demo-example-code",13)(103,"demo-example-code",14),t()(),n(104,"h2",18),e(105,"Global preconfiguration"),t(),n(106,"div",11)(107,"demo-example"),d(108,B,1,0,"ng-template"),t(),n(109,"div",12)(110,"p"),e(111," Some options can be pre-configured for the whole application using "),n(112,"code"),e(113,"LazyElementsModule.forRoot()"),t(),e(114," . This is usually done in "),n(115,"code"),e(116,"AppModule"),t(),e(117," or in the "),n(118,"code"),e(119,"CoreModule"),t(),e(120," . That way we don't have to specify this options in the Lazy loaded features while still preserving posibility to override them if necessary. The "),n(121,"code"),e(122,"forRoot()"),t(),e(123," accepts also "),n(124,"code"),e(125,"elementConfigs"),t(),e(126," so they can be pre-configured centrally removing the need to configure them in Lazy loaded features or inline in the templates. "),t(),p(127,"demo-example-code",13)(128,"demo-example-code",14),t()(),n(129,"h2",19),e(130,"Preloading"),t(),n(131,"div",11)(132,"div",20)(133,"button",21),s("click",function(){return i.preload()}),e(134," Preload everything "),t(),e(135," \xA0 "),n(136,"button",22),s("click",function(){return i.preloadFab()}),e(137,' Preload "fab" only (the previous example) '),t()(),n(138,"div",12)(139,"p"),e(140," You can inject "),n(141,"code"),e(142,"LazyElementLoaderService"),t(),e(143," and call the "),n(144,"code"),e(145,"preload"),t(),e(146," method to preload all the configured modules, or specify the list of "),n(147,"code"),e(148,"tags"),t(),e(149," you want to preload. You can try to refresh the page, preload elements and then try previous examples. Notice how they show elements immediately (depending on the newtrowk conditions ) because they were pre-loaded! Check out the dev tools network tab to see it in action... "),t(),p(150,"demo-example-code",13)(151,"demo-example-code",23),t()(),n(152,"h2",24),e(153,"Hooks"),t(),n(154,"div",11)(155,"demo-example"),d(156,Q,1,0,"ng-template"),t(),n(157,"div",12)(158,"p"),e(159," By providing hooks in "),n(160,"code"),e(161,"ElementConfig"),t(),e(162," or "),n(163,"code"),e(164,"LazyElementRootOptions"),t(),e(165," you can run custom logic after certain points in the element's lifecycle. Clicking the run button below will trigger the download of the custom element which has been configured with a hook. "),t(),p(166,"demo-example-code",13)(167,"demo-example-code",14),t()()()),c&2&&(l(39),a("example",i.codeExample1html),l(),a("example",i.codeExample1standalone)("exampleModule",i.codeExample1module),l(15),a("example",i.codeExample7html),l(),a("example",i.codeExample7standalone)("exampleModule",i.codeExample7module),l(27),a("example",i.codeExample2html),l(),a("example",i.codeExample2standalone)("exampleModule",i.codeExample2module),l(18),a("example",i.codeExample3html),l(),a("example",i.codeExample3standalone)("exampleModule",i.codeExample3module),l(24),a("example",i.codeExample4html),l(),a("example",i.codeExample4standalone)("exampleModule",i.codeExample4coreModule),l(22),a("example",i.codeExample5html),l(),a("example",i.codeExample5ts),l(15),a("example",i.codeExample6html),l(),a("example",i.codeExample6standalone)("exampleModule",i.codeExample6module))},dependencies:[z,A,O,k,T,S,F,P],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]})}return o})(),J=`// pre-configured routes based lazy feature
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
];`,K=`// pre-configured LazyElementsModule
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
`,ee=`<!-- No need to specify url -->
<wired-button *axLazyElement></wired-button>`,te=`// pre-configured LazyElementsModule in FeatureModule
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
`,ne=`// pre-configured routes based lazy feature
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
];`,oe=`<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-checkbox *axLazyElement="null; module: true; loadingTemplate: loading;"></mwc-checkbox>`,ie=`// pre-configured LazyElementsModule
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
`,le=`// pre-configured routes based lazy feature
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
];`,ae=`<!-- We have to specify null; url to be able to pass in additional options -->
<mwc-switch *axLazyElement="null; loadingTemplate: loading;"></mwc-switch>`,re=`<!-- This can be used in any place in the whole application -->
<mwc-fab icon="code" *axLazyElement></mwc-fab>`,me=`// pre-configured LazyElementsModule in CoreModule or AppModule
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
`,de=`// pre-configured in main.ts app-config.ts or provideCore() (custom)
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
}).catch((err) => console.error(err));`,ce='<button (click)="preload()">Preload</button>',pe=`
class LazyFeatureComponent {
  private lazyElementLoaderService = inject(LazyElementLoaderService);

  preload() {
    this.lazyElementLoaderService.preload();
  }

  preloadFab() {
    this.lazyElementLoaderService.preload(['mwc-fab']);
  }
}
`,se=`export function beforeLoadHook(tag: string): Promise<void> {
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
];`,ue=`// pre-configured LazyElementsModule
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
`,Ee="<mwc-slider *axLazyElement></mwc-slider>",ge=`<!-- No need to specify url -->
<wired-toggle *axLazyElement (change)="toggle()"></wired-toggle>`,fe=`export function elementConfigsFactory(): ElementConfig[] {
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
`,xe=`export function elementConfigsFactory(): ElementConfig[] {
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
];`;var y=(()=>{class o{ngOnInit(){}static \u0275fac=function(c){return new(c||o)};static \u0275cmp=E({type:o,selectors:[["demo-error"]],decls:2,vars:0,template:function(c,i){c&1&&(n(0,"p"),e(1,"Loading failed \u26A0\uFE0F..."),t())},encapsulation:2})}return o})();function _e(o){return alert(`Starting download of ${o} web component! The download will be artificially postponed for 5 seconds.`),new Promise(r=>setTimeout(r,5e3))}function he(){return[{tag:"wired-toggle",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js",loadingComponent:g,errorComponent:y}]}var Ce=[{tag:"wired-button",url:"https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js",loadingComponent:g,errorComponent:y,preload:!0},{tag:"mwc-switch",url:"https://unpkg.com/@material/mwc-switch@0.27.0/mwc-switch.js?module",isModule:!0},{tag:"mwc-checkbox",url:"https://unpkg.com/@material/mwc-checkbox@0.27.0/mwc-checkbox.js?module",isModule:!0},{tag:"mwc-fab",url:"https://unpkg.com/@material/mwc-fab@0.27.0/mwc-fab.js?module",isModule:!0,loadingComponent:g},{tag:"mwc-slider",url:"https://unpkg.com/@material/mwc-slider@0.14.1/mwc-slider.js?module",isModule:!0,hooks:{beforeLoad:_e}}],je=[{path:"",providers:[b(Ce),{provide:L,useFactory:he,multi:!0}],children:[{path:"",component:D}]}];export{_e as beforeLoadHook,je as default,he as elementConfigsFactory};
