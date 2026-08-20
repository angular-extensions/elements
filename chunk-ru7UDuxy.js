import{Dt as Rh,Ht as Uu,Lt as Tw,Nn as jD,Tn as gI,Y as Ji,mt as Oh}from"./chunk-C4_gtfUn.js";import"./chunk-BelJIGP0.js";import"./chunk-DkaxpU-d.js";import"./chunk-B2P_CqHU.js";import{a as he,o as oe}from"./main-UNIKYDVJ.js";import{t as Nn}from"./chunk-D8LWnu7z.js";var c=(()=>{class a{codeExampleComponent=x;codeExampleModule=M;codeExampleAppConfig=g;codeExampleAppModule=S;codeExampleSharedModule=h;ngOnInit(){}static ɵfac=function(r){return new(r||a)};static ɵcmp=gI({type:a,selectors:[[`demo-getting-started`]],decls:84,vars:5,consts:[[1,`wrapper`],[3,`example`,`exampleModule`],[3,`example`],[`language`,`typescript`,3,`highlight`]],template:function(r,n){r&1&&(Ji(0,`div`,0)(1,`h1`),Tw(2,`Getting started`),Uu(),Ji(3,`p`),Tw(4,` Start using Angular elements or any other web components in your applications by following these 5 steps... `),Uu(),Ji(5,`ol`)(6,`li`),Tw(7,` Install `),Ji(8,`code`),Tw(9,`npm i @angular-extensions/elements`),Uu()(),Ji(10,`li`),Tw(11,` Add `),Ji(12,`code`),Tw(13,` import { LazyElementsModule } from '@angular-extensions/elements'; `),Uu()(),Ji(14,`li`),Tw(15,` Append `),Ji(16,`code`),Tw(17,`LazyElementsModule`),Uu(),Tw(18,` to the `),Ji(19,`code`),Tw(20,`imports: []`),Uu(),Tw(21,` of your `),Ji(22,`code`),Tw(23,`AppModule`),Uu()(),Ji(24,`li`),Tw(25,` Add new `),Ji(26,`code`),Tw(27,`schemas: []`),Uu(),Tw(28,` property with `),Ji(29,`code`),Tw(30,`CUSTOM_ELEMENTS_SCHEMA`),Uu(),Tw(31,` value to `),Ji(32,`code`),Tw(33,`@NgModule`),Uu(),Tw(34,` decorator of your `),Ji(35,`code`),Tw(36,`AppModule`),Uu()(),Ji(37,`li`),Tw(38,` Use `),Ji(39,`code`),Tw(40,`*axLazyElement`),Uu(),Tw(41,` directive on an element you wish to load and pass in the url of the element bundle `),Uu()(),Ji(42,`p`),Tw(43,`That way we get...`),Uu(),Oh(44,`demo-example-code`,1),Ji(45,`p`),Tw(46,` and can use `),Ji(47,`code`),Tw(48,`*axLazyElement`),Uu(),Tw(49,` in the template of our component... `),Uu(),Oh(50,`demo-example-code`,2),Ji(51,`h2`),Tw(52,`Using in other (and lazy loaded) modules`),Uu(),Ji(53,`p`),Tw(54,` Any non-trivial Angular application will usually contain more than a single `),Ji(55,`code`),Tw(56,`AppModule`),Uu(),Tw(57,` . `),Uu(),Ji(58,`p`),Tw(59,`More so, some of these additional modules could be lazy loaded.`),Uu(),Ji(60,`p`),Tw(61,` Any module which contains components which are using `),Ji(62,`code`),Tw(63,`*axLazyElement`),Uu(),Tw(64,` directive has to have `),Ji(65,`code`),Tw(66,`schemas: [CUSTOM_ELEMENTS_SCHEMA]`),Uu(),Tw(67,` in its `),Ji(68,`code`),Tw(69,`@NgModule`),Uu(),Tw(70,` decorator configuration. Also the module has to either import `),Ji(71,`code`),Tw(72,`LazyElementsModule`),Uu(),Tw(73,` . Let's have a look on the following example... `),Uu(),Oh(74,`pre`,3),Ji(75,`p`),Tw(76,` Or import other module (most commonly `),Ji(77,`code`),Tw(78,`SharedModule`),Uu(),Tw(79,` ) which both imports and exports `),Ji(80,`code`),Tw(81,`LazyElementsModule`),Uu(),Tw(82,` . `),Uu(),Oh(83,`pre`,3),Uu()),r&2&&(jD(44),Rh(`example`,n.codeExampleAppConfig)(`exampleModule`,n.codeExampleAppModule),jD(6),Rh(`example`,n.codeExampleComponent),jD(24),Rh(`highlight`,n.codeExampleModule),jD(9),Rh(`highlight`,n.codeExampleSharedModule))},dependencies:[he,oe,Nn],styles:[`ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}`]})}return a})();var x=`import { Component } from '@angular/core';

@Component({
  selector: 'your-org-feature',
  standalone: true,
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <some-element *axLazyElement="elementUrl"></some-element>
  \`
})
export class FeatureComponent {
  readonly elementUrl = 'https://your-org.com/elements/some-element.js';
}
`;var M=`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementsModule } from '@angular-extensions/elements';

import { FeatureComponent } from './feature-component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]
  declarations: [FeatureComponent]
})
export class FeatureModule {}
`;var g=`export const appConfig: ApplicationConfig = {
  providers: [
    // other providers...
    provideAxLazyElements(),
  ]
);
`;var S=`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, LazyElementsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
`;var h=`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  imports: [CommonModule, LazyElementsModule],
  exports: [CommonModule, LazyElementsModule]
})
export class SharedModule {}
`;var O=[{path:``,component:c}];export{O as default};