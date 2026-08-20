import{Dt as Rh,Ht as Uu,Lt as Tw,Nn as jD,Tn as gI,Y as Ji,mt as Oh}from"./chunk-C4_gtfUn.js";import"./chunk-BelJIGP0.js";import"./chunk-DkaxpU-d.js";import"./chunk-B2P_CqHU.js";import{a as he,o as oe,t as Dt}from"./main-UNIKYDVJ.js";import{t as Nn}from"./chunk-D8LWnu7z.js";var h=(()=>{class i{codeExampleComponent=x;codeExampleComponentBinding=w;codeExampleComponentLazy=E;ngOnInit(){}static ɵfac=function(o){return new(o||i)};static ɵcmp=gI({type:i,selectors:[[`demo-how-it-works`]],decls:175,vars:3,consts:[[1,`wrapper`],[`routerLink`,`/docs/use-cases`],[`href`,`https://angular.io/guide/elements`,`target`,`_blank`],[`href`,`https://github.com/manfredsteyer/ngx-build-plus#readme`,`target`,`_blank`],[1,`large`],[3,`example`],[`language`,`typescript`,3,`highlight`]],template:function(o,m){o&1&&(Ji(0,`div`,0)(1,`h1`),Tw(2,`How it works`),Uu(),Ji(3,`p`),Tw(4,` The `),Ji(5,`code`),Tw(6,`*axLazyElement`),Uu(),Tw(7,` directive is used to load any Angular element (or any other web component) and display it in the standard Angular component template. `),Uu(),Ji(8,`blockquote`),Tw(9,` In case you are wondering about when this approach might be useful please check out `),Ji(10,`a`,1),Tw(11,`use cases`),Uu(),Tw(12,` page to learn more... `),Uu(),Ji(13,`h2`),Tw(14,`Angular elements`),Uu(),Ji(15,`blockquote`),Tw(16,` Angular elements are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way - `),Ji(17,`a`,2),Tw(18,` Official Angular Docs `),Uu()(),Ji(19,`p`),Tw(20,` As written in the official Angular documentation, Angular elements `),Ji(21,`code`),Tw(22,`@angular/elements`),Uu(),Tw(23,` provide us with a way to convert standard Angular components to custom elements (web components) which then can be consumed as standard built-in HTML elements from the point of view of the consumer application. `),Uu(),Ji(24,`p`),Tw(25,` The elements can be built with the help of Angular CLI and `),Ji(26,`code`),Tw(27,`ngx-build-plus`),Uu(),Ji(28,`a`,3),Tw(29,` library `),Uu(),Tw(30,` into single a bundle. Having a single bundle file makes it very convenient to consume custom Angular element in the consumer app! `),Uu(),Ji(31,`h2`),Tw(32,` Standard way of using Angular elements (and other web components) in Angular applications `),Uu(),Ji(33,`p`),Tw(34,` Let's say we have created an Angular element, for example `),Ji(35,`code`),Tw(36,`<your-org-customer-editor></your-org-customer-editor>`),Uu(),Tw(37,` and built and packaged it into a single bundle file `),Ji(38,`code`),Tw(39,`your-org-customer-editor.js`),Uu(),Tw(40,` . `),Uu(),Ji(41,`p`),Tw(42,` Usually we would have to include `),Ji(43,`code`),Tw(44,` <script src="path/to/your-org-customer-editor.js"><\/script> `),Uu(),Tw(45,` in our `),Ji(46,`code`),Tw(47,`index.html`),Uu(),Tw(48,` so that we can be sure that the element loads before it was used in the template of some component of our consumer app. `),Uu(),Ji(49,`p`),Tw(50,` This approach has `),Ji(51,`strong`),Tw(52,`one main disadvantage`),Uu(),Tw(53,` , which is that it increases initial javascript payload that needs to be downloaded, parsed and executed... Initial payload hurts even more if we're dealing with "sub-application" style Angular elements which can be considerably more complex compared to single components like button or card. `),Uu(),Ji(54,`p`),Tw(55,` Initial loading time can make huge impact on overall success of many kind of applications and represents the main reason for existence of this library which enables us to `),Ji(56,`strong`),Tw(57,`lazy load Angular elements`),Uu(),Tw(58,` with ease and highest possible granularity! `),Uu(),Ji(59,`h2`),Tw(60,`Much Better Way of using Angular elements (and other web components)`),Uu(),Ji(61,`p`),Tw(62,` Wouldn't it be better if we could use our elements in the same way as any other HTML element while postpone their loading from some backend until the very last moment possible? `),Uu(),Ji(63,`p`),Tw(64,` More so, wouldn't it be great if this happened automatically without the need to manually trigger some kind of loading of the necessary bundle? `),Uu(),Ji(65,`blockquote`,4),Tw(66,` What if all these things could be achieved by using simple structural directive `),Ji(67,`code`),Tw(68,`*axLazyElement`),Uu(),Tw(69,` ? `),Uu(),Oh(70,`demo-example-code`,5),Ji(71,`p`),Tw(72,` The `),Ji(73,`code`),Tw(74,`*axLazyElement`),Uu(),Tw(75,` is a structural directive which means it will `),Ji(76,`strong`),Tw(77,`remove`),Uu(),Tw(78,` the element on which it was added from the DOM by default. This is very useful because we DO NOT want to render element before it was actually loaded from the backend! The directive will then trigger loading of the bundle and the render element once the loading was finished. `),Uu(),Ji(79,`h2`),Tw(80,`Using standard Angular template binding`),Uu(),Ji(81,`p`),Tw(82,` Another great thing about using this approach is that we can use standard Angular template binding syntax like `),Ji(83,`code`),Tw(84,`[customerId]="customerId"`),Uu(),Tw(85,` and `),Ji(86,`code`),Tw(87,`(customerDataChange)="handleCustomerDataChange($event)"`),Uu(),Tw(88,` to pass in data and react to events. It works just as expected even though the element is lazy loaded! `),Uu(),Oh(89,`pre`,6),Ji(90,`h2`),Tw(91,`Seamless lazy loading`),Uu(),Ji(92,`p`),Tw(93,` As mentioned above, our goal is to lazy load element to improve application startup time by decreasing size of javascript which has to be downloaded initially. `),Uu(),Ji(94,`p`),Tw(95,` Lazy loading with `),Ji(96,`code`),Tw(97,`*axLazyElements`),Uu(),Tw(98,` happens automatically whenever the element is rendered in the template of some Angular component. Consider the following example... `),Uu(),Oh(99,`pre`,6),Ji(100,`p`),Tw(101,` We're using `),Ji(102,`code`),Tw(103,` <your-org-customer-editor *axLazyElement="url"></your-org-customer-editor> `),Uu(),Tw(104,` in the components template but it will not trigger element loading just yet. As we may notice, the element is wrapped in the `),Ji(105,`code`),Tw(106,`<ng-container></ng-container>`),Uu(),Tw(107,` which uses `),Ji(108,`code`),Tw(109,`@if`),Uu(),Tw(110,` directive so our element is not rendered until we click the button... `),Uu(),Ji(111,`blockquote`,4),Tw(112,` The loading of the element will be triggered only after we have clicked the button and rendered it in the component template `),Uu(),Ji(113,`p`),Tw(114,` To summarize, the element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... `),Uu(),Ji(115,`ul`)(116,`li`),Tw(117,`Angular component uses element in its template`),Uu(),Ji(118,`li`),Tw(119,` Angular component uses element in its template conditionally ( `),Ji(120,`code`),Tw(121,`@if`),Uu(),Tw(122,` , `),Ji(123,`code`),Tw(124,`@for`),Uu(),Tw(125,` , ...) and the condition was fulfilled `),Uu(),Ji(126,`li`),Tw(127,` User navigated to an Angular component which uses element in its template (can be both eagerly or lazily loaded routes) `),Uu()(),Ji(128,`blockquote`),Tw(129,` This also means that if we used element in a component that is displayed straight from application startup, we would also trigger loading of the element bundle immediately so it will `),Ji(130,`strong`),Tw(131,`NOT be lazy`),Uu(),Tw(132,` in that case `),Uu(),Ji(133,`h2`),Tw(134,`In-depth overview of loading mechanism`),Uu(),Ji(135,`p`),Tw(136,` Loading starts only once we want to display an Angular component which renders given element in its template. After that the loading goes through the following process `),Uu(),Ji(137,`ol`)(138,`li`),Tw(139,` Check if we provided reference to `),Ji(140,`code`),Tw(141,`loading`),Uu(),Tw(142,` template ( `),Ji(143,`code`),Tw(144,`<ng-template #loading>Loading ...</ng-template>`),Uu(),Tw(145,` ) and display it in place of the element... `),Uu(),Ji(146,`li`),Tw(147,`Check if element was already loaded in the past`),Uu(),Ji(148,`li`),Tw(149,`✅ If yes, remove loading template and render given element instead`),Uu(),Ji(150,`li`),Tw(151,` ⬇️ If no, create a `),Ji(152,`code`),Tw(153,`<script>`),Uu(),Tw(154,` tag with `),Ji(155,`code`),Tw(156,`src = url`),Uu(),Tw(157,` and handler for the `),Ji(158,`code`),Tw(159,`onload`),Uu(),Tw(160,` and `),Ji(161,`code`),Tw(162,`onerror`),Uu(),Tw(163,` events to notify directive when element was loaded or failed to load `),Uu(),Ji(164,`li`),Tw(165,` Append `),Ji(166,`code`),Tw(167,`<script>`),Uu(),Tw(168,` to the document body `),Uu(),Ji(169,`li`),Tw(170,`Once loaded, notify directive about the outcome`),Uu(),Ji(171,`li`),Tw(172,` ✅ Remove loading template and render given element when loading was successful `),Uu(),Ji(173,`li`),Tw(174,` ❌ Remove loading template and render error template (if provided) when loading was not successful `),Uu()()()),o&2&&(jD(70),Rh(`example`,m.codeExampleComponent),jD(19),Rh(`highlight`,m.codeExampleComponentBinding),jD(10),Rh(`highlight`,m.codeExampleComponentLazy))},dependencies:[Dt,he,oe,Nn],styles:[`ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}`]})}return i})();var x=`import { Component } from '@angular/core';

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
`;var E=`import { Component, signal } from '@angular/core';

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
`;var w=`import { Component } from '@angular/core';

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
`;var k=[{path:``,component:h}];export{k as default};