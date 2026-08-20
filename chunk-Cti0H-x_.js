import{Dt as Rh,Ht as Uu,Lt as Tw,Nn as jD,Tn as gI,Y as Ji,mt as Oh}from"./chunk-C4_gtfUn.js";import"./chunk-BelJIGP0.js";import"./chunk-DkaxpU-d.js";import"./chunk-B2P_CqHU.js";import{a as he,t as Dt}from"./main-UNIKYDVJ.js";import{t as Nn}from"./chunk-D8LWnu7z.js";var c=(()=>{class o{codeExampleInline=E;codeExampleModule=g;codeExampleStandalone=x;codeExamplePreConfigured=h;ngOnInit(){}static ɵfac=function(i){return new(i||o)};static ɵcmp=gI({type:o,selectors:[[`demo-configuration`]],decls:81,vars:4,consts:[[1,`wrapper`],[1,`large`],[3,`example`],[3,`example`,`exampleModule`],[`routerLink`,`/examples/advanced`]],template:function(i,l){i&1&&(Ji(0,`div`,0)(1,`h1`),Tw(2,`Configuration`),Uu(),Ji(3,`blockquote`,1),Tw(4,` The library supports additional configuration which can improve developer experience when using multiple elements (or same element multiple time). `),Uu(),Ji(5,`h2`),Tw(6,`Pre-configuration with module`),Uu(),Ji(7,`p`),Tw(8,` Let's imagine situation in which we want to use multiple instances of a single element in the template of one of our feature components. `),Uu(),Ji(9,`blockquote`),Tw(10,` Example of such an use case could be that we have a `),Ji(11,`code`),Tw(12,`<user-profile-element>`),Uu(),Tw(13,` and we want to display top 3 users for a given month. We would need to pass url in all of the elements... `),Uu(),Oh(14,`demo-example-code`,2),Ji(15,`p`),Tw(16,` This could be optimized by storing url once in the component variable but still, component needs to be aware of the element url. This can lead to further inconvenient situation when element url changes and we would have to search for the url in te whole code base... `),Uu(),Ji(17,`p`),Tw(18,` Compare this to the following solution where we pre-configure all of the elements we will be using in our application with the help of the `),Ji(19,`code`),Tw(20,`LazyElementsModule.forRoot(options)`),Uu(),Tw(21,` (or `),Ji(22,`code`),Tw(23,`.forFeature()`),Uu(),Tw(24,` ) static functions! `),Uu(),Oh(25,`demo-example-code`,3),Ji(26,`p`),Tw(27,` We're creating options of the `),Ji(28,`code`),Tw(29,`LazyElementModuleOptions`),Uu(),Tw(30,` type and passing in array of `),Ji(31,`code`),Tw(32,`ElementConfig`),Uu(),Tw(33,` items. Every item specifies element `),Ji(34,`code`),Tw(35,`tag`),Uu(),Tw(36,` and `),Ji(37,`code`),Tw(38,`url`),Uu(),Tw(39,` ... `),Uu(),Ji(40,`p`),Tw(41,` With this configuration in place, we can adjust original `),Ji(42,`code`),Tw(43,`FeatureComponent`),Uu(),Tw(44,` template to look like this... `),Uu(),Oh(45,`demo-example-code`,2),Ji(46,`p`),Tw(47,` As we can see, the component template got simple! There is less redundant data and the configuration was centralized in the predictable place that is easy to find and adjust when necessary! `),Uu(),Ji(48,`p`),Tw(49,` Check out the `),Ji(50,`a`,4),Tw(51,`working demo`),Uu(),Tw(52,` of this approach! `),Uu(),Ji(53,`h2`),Tw(54,`Supported features`),Uu(),Ji(55,`ul`)(56,`li`),Tw(57,` ✅ Global and granular configuration of `),Ji(58,`code`),Tw(59,`isModule`),Uu(),Tw(60,` flag (script type module for ECMAScript modules) `),Uu(),Ji(61,`li`),Tw(62,` ✅ Global and granular configuration of `),Ji(63,`code`),Tw(64,`loadingComponent`),Uu(),Tw(65,` (and `),Ji(66,`code`),Tw(67,`loadingTemplate`),Uu(),Tw(68,` ) `),Uu(),Ji(69,`li`),Tw(70,` ✅ Global and granular configuration of `),Ji(71,`code`),Tw(72,`errorComponent`),Uu(),Tw(73,` (and `),Ji(74,`code`),Tw(75,`errorTemplate`),Uu(),Tw(76,` ) `),Uu(),Ji(77,`li`),Tw(78,`✅ Granular element pre-loading (config based)`),Uu(),Ji(79,`li`),Tw(80,` ✅ Ability to pre-load elements based on custom conditions using a service `),Uu()()()),i&2&&(jD(14),Rh(`example`,l.codeExampleInline),jD(11),Rh(`example`,l.codeExampleStandalone)(`exampleModule`,l.codeExampleModule),jD(20),Rh(`example`,l.codeExamplePreConfigured))},dependencies:[Dt,he,Nn],styles:[`ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}ul[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]{text-decoration:line-through}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}`]})}return o})();var E=`@Component({

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
export class FeatureComponent {}`;var x=`// pre-configured route based lazy feature
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
];`;var g=`// pre-configured LazyElementsModule
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
`;var h=`@Component({
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
export class FeatureComponent {}`;var v=[{path:``,component:c}];export{v as default};