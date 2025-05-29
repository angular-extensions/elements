import{b as u}from"./chunk-AZHYLC5A.js";import"./chunk-OHYOZSZW.js";import"./chunk-V4Y5VTPI.js";import{b as c,c as p}from"./chunk-2TUE56NI.js";import"./chunk-MOZBASQ3.js";import{c as s}from"./chunk-IUMN36FE.js";import"./chunk-72YBKSO7.js";import{Db as l,Eb as t,Fb as n,Gb as r,Ya as a,Zb as e,ib as d}from"./chunk-NXE37KCX.js";import"./chunk-EQDQRRRY.js";var h=(()=>{class i{codeExampleComponent=x;codeExampleComponentBinding=w;codeExampleComponentLazy=E;ngOnInit(){}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=d({type:i,selectors:[["demo-how-it-works"]],decls:175,vars:3,consts:[[1,"wrapper"],["routerLink","/docs/use-cases"],["href","https://angular.io/guide/elements","target","_blank"],["href","https://github.com/manfredsteyer/ngx-build-plus#readme","target","_blank"],[1,"large"],[3,"example"],["language","typescript",3,"highlight"]],template:function(o,m){o&1&&(t(0,"div",0)(1,"h1"),e(2,"How it works"),n(),t(3,"p"),e(4," The "),t(5,"code"),e(6,"*axLazyElement"),n(),e(7," directive is used to load any Angular element (or any other web component) and display it in the standard Angular component template. "),n(),t(8,"blockquote"),e(9," In case you are wondering about when this approach might be useful please check out "),t(10,"a",1),e(11,"use cases"),n(),e(12," page to learn more... "),n(),t(13,"h2"),e(14,"Angular elements"),n(),t(15,"blockquote"),e(16," Angular elements are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way - "),t(17,"a",2),e(18," Official Angular Docs "),n()(),t(19,"p"),e(20," As written in the official Angular documentation, Angular elements "),t(21,"code"),e(22,"@angular/elements"),n(),e(23," provide us with a way to convert standard Angular components to custom elements (web components) which then can be consumed as standard built-in HTML elements from the point of view of the consumer application. "),n(),t(24,"p"),e(25," The elements can be built with the help of Angular CLI and "),t(26,"code"),e(27,"ngx-build-plus"),n(),t(28,"a",3),e(29," library "),n(),e(30," into single a bundle. Having a single bundle file makes it very convenient to consume custom Angular element in the consumer app! "),n(),t(31,"h2"),e(32," Standard way of using Angular elements (and other web components) in Angular applications "),n(),t(33,"p"),e(34," Let's say we have created an Angular element, for example "),t(35,"code"),e(36,"<your-org-customer-editor></your-org-customer-editor>"),n(),e(37," and built and packaged it into a single bundle file "),t(38,"code"),e(39,"your-org-customer-editor.js"),n(),e(40," . "),n(),t(41,"p"),e(42," Usually we would have to include "),t(43,"code"),e(44,' <script src="path/to/your-org-customer-editor.js"><\/script> '),n(),e(45," in our "),t(46,"code"),e(47,"index.html"),n(),e(48," so that we can be sure that the element loads before it was used in the template of some component of our consumer app. "),n(),t(49,"p"),e(50," This approach has "),t(51,"strong"),e(52,"one main disadvantage"),n(),e(53,` , which is that it increases initial javascript payload that needs to be downloaded, parsed and executed... Initial payload hurts even more if we're dealing with "sub-application" style Angular elements which can be considerably more complex compared to single components like button or card. `),n(),t(54,"p"),e(55," Initial loading time can make huge impact on overall success of many kind of applications and represents the main reason for existence of this library which enables us to "),t(56,"strong"),e(57,"lazy load Angular elements"),n(),e(58," with ease and highest possible granularity! "),n(),t(59,"h2"),e(60,"Much Better Way of using Angular elements (and other web components)"),n(),t(61,"p"),e(62," Wouldn't it be better if we could use our elements in the same way as any other HTML element while postpone their loading from some backend until the very last moment possible? "),n(),t(63,"p"),e(64," More so, wouldn't it be great if this happened automatically without the need to manually trigger some kind of loading of the necessary bundle? "),n(),t(65,"blockquote",4),e(66," What if all these things could be achieved by using simple structural directive "),t(67,"code"),e(68,"*axLazyElement"),n(),e(69," ? "),n(),r(70,"demo-example-code",5),t(71,"p"),e(72," The "),t(73,"code"),e(74,"*axLazyElement"),n(),e(75," is a structural directive which means it will "),t(76,"strong"),e(77,"remove"),n(),e(78," the element on which it was added from the DOM by default. This is very useful because we DO NOT want to render element before it was actually loaded from the backend! The directive will then trigger loading of the bundle and the render element once the loading was finished. "),n(),t(79,"h2"),e(80,"Using standard Angular template binding"),n(),t(81,"p"),e(82," Another great thing about using this approach is that we can use standard Angular template binding syntax like "),t(83,"code"),e(84,'[customerId]="customerId"'),n(),e(85," and "),t(86,"code"),e(87,'(customerDataChange)="handleCustomerDataChange($event)"'),n(),e(88," to pass in data and react to events. It works just as expected even though the element is lazy loaded! "),n(),r(89,"pre",6),t(90,"h2"),e(91,"Seamless lazy loading"),n(),t(92,"p"),e(93," As mentioned above, our goal is to lazy load element to improve application startup time by decreasing size of javascript which has to be downloaded initially. "),n(),t(94,"p"),e(95," Lazy loading with "),t(96,"code"),e(97,"*axLazyElements"),n(),e(98," happens automatically whenever the element is rendered in the template of some Angular component. Consider the following example... "),n(),r(99,"pre",6),t(100,"p"),e(101," We're using "),t(102,"code"),e(103,' <your-org-customer-editor *axLazyElement="url"></your-org-customer-editor> '),n(),e(104," in the components template but it will not trigger element loading just yet. As we may notice, the element is wrapped in the "),t(105,"code"),e(106,"<ng-container></ng-container>"),n(),e(107," which uses "),t(108,"code"),e(109,"@if"),n(),e(110," directive so our element is not rendered until we click the button... "),n(),t(111,"blockquote",4),e(112," The loading of the element will be triggered only after we have clicked the button and rendered it in the component template "),n(),t(113,"p"),e(114," To summarize, the element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... "),n(),t(115,"ul")(116,"li"),e(117,"Angular component uses element in its template"),n(),t(118,"li"),e(119," Angular component uses element in its template conditionally ( "),t(120,"code"),e(121,"@if"),n(),e(122," , "),t(123,"code"),e(124,"@for"),n(),e(125," , ...) and the condition was fulfilled "),n(),t(126,"li"),e(127," User navigated to an Angular component which uses element in its template (can be both eagerly or lazily loaded routes) "),n()(),t(128,"blockquote"),e(129," This also means that if we used element in a component that is displayed straight from application startup, we would also trigger loading of the element bundle immediately so it will "),t(130,"strong"),e(131,"NOT be lazy"),n(),e(132," in that case "),n(),t(133,"h2"),e(134,"In-depth overview of loading mechanism"),n(),t(135,"p"),e(136," Loading starts only once we want to display an Angular component which renders given element in its template. After that the loading goes through the following process "),n(),t(137,"ol")(138,"li"),e(139," Check if we provided reference to "),t(140,"code"),e(141,"loading"),n(),e(142," template ( "),t(143,"code"),e(144,"<ng-template #loading>Loading ...</ng-template>"),n(),e(145," ) and display it in place of the element... "),n(),t(146,"li"),e(147,"Check if element was already loaded in the past"),n(),t(148,"li"),e(149,"\u2705 If yes, remove loading template and render given element instead"),n(),t(150,"li"),e(151," \u2B07\uFE0F If no, create a "),t(152,"code"),e(153,"<script>"),n(),e(154," tag with "),t(155,"code"),e(156,"src = url"),n(),e(157," and handler for the "),t(158,"code"),e(159,"onload"),n(),e(160," and "),t(161,"code"),e(162,"onerror"),n(),e(163," events to notify directive when element was loaded or failed to load "),n(),t(164,"li"),e(165," Append "),t(166,"code"),e(167,"<script>"),n(),e(168," to the document body "),n(),t(169,"li"),e(170,"Once loaded, notify directive about the outcome"),n(),t(171,"li"),e(172," \u2705 Remove loading template and render given element when loading was successful "),n(),t(173,"li"),e(174," \u274C Remove loading template and render error template (if provided) when loading was not successful "),n()()()),o&2&&(a(70),l("example",m.codeExampleComponent),a(19),l("highlight",m.codeExampleComponentBinding),a(10),l("highlight",m.codeExampleComponentLazy))},dependencies:[s,p,c,u],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]})}return i})(),x=`import { Component } from '@angular/core';

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
  url = 'path/to/your-org-customer-editor.js';
}
`,E=`import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    @if(showEditor) {
      <your-org-customer-editor *axLazyElement="url"></your-org-customer-editor>
    }
    <button (click)="toggleShowEditor()">Edit customer</button>
  \`
})
export class FeatureComponent {
  showEditor = false;

  url = 'path/to/your-org-customer-editor.js';

  toggleShowEditor() {
    this.showEditor = !showEditor;
  }
}
`,w=`import { Component } from '@angular/core';

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
  url = 'path/to/your-org-customer-editor.js';

  customerId = 'C-123-456';

  handleCustomerDataChange(change) {
    // handle change ...
  }
}
`;var k=[{path:"",component:h}];export{k as default};
