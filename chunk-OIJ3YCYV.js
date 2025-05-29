import{b as u}from"./chunk-AZHYLC5A.js";import"./chunk-OHYOZSZW.js";import"./chunk-V4Y5VTPI.js";import{c as d}from"./chunk-2TUE56NI.js";import"./chunk-MOZBASQ3.js";import{c as p}from"./chunk-IUMN36FE.js";import"./chunk-72YBKSO7.js";import{Db as a,Eb as t,Fb as n,Gb as m,Ya as r,Zb as e,ib as s}from"./chunk-NXE37KCX.js";import"./chunk-EQDQRRRY.js";var c=(()=>{class o{codeExampleInline=E;codeExampleModule=g;codeExampleStandalone=x;codeExamplePreConfigured=h;ngOnInit(){}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=s({type:o,selectors:[["demo-configuration"]],decls:81,vars:4,consts:[[1,"wrapper"],[1,"large"],[3,"example"],[3,"example","exampleModule"],["routerLink","/examples/advanced"]],template:function(i,l){i&1&&(t(0,"div",0)(1,"h1"),e(2,"Configuration"),n(),t(3,"blockquote",1),e(4," The library supports additional configuration which can improve developer experience when using multiple elements (or same element multiple time). "),n(),t(5,"h2"),e(6,"Pre-configuration with module"),n(),t(7,"p"),e(8," Let's imagine situation in which we want to use multiple instances of a single element in the template of one of our feature components. "),n(),t(9,"blockquote"),e(10," Example of such an use case could be that we have a "),t(11,"code"),e(12,"<user-profile-element>"),n(),e(13," and we want to display top 3 users for a given month. We would need to pass url in all of the elements... "),n(),m(14,"demo-example-code",2),t(15,"p"),e(16," This could be optimized by storing url once in the component variable but still, component needs to be aware of the element url. This can lead to further inconvenient situation when element url changes and we would have to search for the url in te whole code base... "),n(),t(17,"p"),e(18," Compare this to the following solution where we pre-configure all of the elements we will be using in our application with the help of the "),t(19,"code"),e(20,"LazyElementsModule.forRoot(options)"),n(),e(21," (or "),t(22,"code"),e(23,".forFeature()"),n(),e(24," ) static functions! "),n(),m(25,"demo-example-code",3),t(26,"p"),e(27," We're creating options of the "),t(28,"code"),e(29,"LazyElementModuleOptions"),n(),e(30," type and passing in array of "),t(31,"code"),e(32,"ElementConfig"),n(),e(33," items. Every item specifies element "),t(34,"code"),e(35,"tag"),n(),e(36," and "),t(37,"code"),e(38,"url"),n(),e(39," ... "),n(),t(40,"p"),e(41," With this configuration in place, we can adjust original "),t(42,"code"),e(43,"FeatureComponent"),n(),e(44," template to look like this... "),n(),m(45,"demo-example-code",2),t(46,"p"),e(47," As we can see, the component template got simple! There is less redundant data and the configuration was centralized in the predictable place that is easy to find and adjust when necessary! "),n(),t(48,"p"),e(49," Check out the "),t(50,"a",4),e(51,"working demo"),n(),e(52," of this approach! "),n(),t(53,"h2"),e(54,"Supported features"),n(),t(55,"ul")(56,"li"),e(57," \u2705 Global and granular configuration of "),t(58,"code"),e(59,"isModule"),n(),e(60," flag (script type module for ECMAScript modules) "),n(),t(61,"li"),e(62," \u2705 Global and granular configuration of "),t(63,"code"),e(64,"loadingComponent"),n(),e(65," (and "),t(66,"code"),e(67,"loadingTemplate"),n(),e(68," ) "),n(),t(69,"li"),e(70," \u2705 Global and granular configuration of "),t(71,"code"),e(72,"errorComponent"),n(),e(73," (and "),t(74,"code"),e(75,"errorTemplate"),n(),e(76," ) "),n(),t(77,"li"),e(78,"\u2705 Granular element pre-loading (config based)"),n(),t(79,"li"),e(80," \u2705 Ability to pre-load elements based on custom conditions using a service "),n()()()),i&2&&(r(14),a("example",l.codeExampleInline),r(11),a("example",l.codeExampleStandalone)("exampleModule",l.codeExampleModule),r(20),a("example",l.codeExamplePreConfigured))},dependencies:[p,d,u],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]{text-decoration:line-through}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]})}return o})(),E=`@Component({

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
export class FeatureComponent {}`,x=`// pre-configured route based lazy feature
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
];`,g=`// pre-configured LazyElementsModule
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
`,h=`@Component({
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
export class FeatureComponent {}`;var v=[{path:"",component:c}];export{v as default};
