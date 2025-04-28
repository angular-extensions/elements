import{a as E}from"./chunk-DDLRTDXN.js";import"./chunk-SULMHPBA.js";import"./chunk-QUZ3G4VO.js";import{b as p,c as s}from"./chunk-DOB4G2OH.js";import"./chunk-V632RBP4.js";import"./chunk-KOHBDHAI.js";import{Hb as t,Ib as o,Jb as m,Yb as e,bb as i,nb as d,yb as l}from"./chunk-P7DSPICV.js";import"./chunk-EQDQRRRY.js";var c=(()=>{class a{codeExampleComponent=x;codeExampleModule=M;codeExampleAppConfig=g;codeExampleAppModule=S;codeExampleSharedModule=h;ngOnInit(){}static \u0275fac=function(r){return new(r||a)};static \u0275cmp=d({type:a,selectors:[["demo-getting-started"]],decls:84,vars:5,consts:[[1,"wrapper"],[3,"example","exampleModule"],[3,"example"],["language","typescript",3,"highlight"]],template:function(r,n){r&1&&(t(0,"div",0)(1,"h1"),e(2,"Getting started"),o(),t(3,"p"),e(4," Start using Angular elements or any other web components in your applications by following these 5 steps... "),o(),t(5,"ol")(6,"li"),e(7," Install "),t(8,"code"),e(9,"npm i @angular-extensions/elements"),o()(),t(10,"li"),e(11," Add "),t(12,"code"),e(13," import { LazyElementsModule } from '@angular-extensions/elements'; "),o()(),t(14,"li"),e(15," Append "),t(16,"code"),e(17,"LazyElementsModule"),o(),e(18," to the "),t(19,"code"),e(20,"imports: []"),o(),e(21," of your "),t(22,"code"),e(23,"AppModule"),o()(),t(24,"li"),e(25," Add new "),t(26,"code"),e(27,"schemas: []"),o(),e(28," property with "),t(29,"code"),e(30,"CUSTOM_ELEMENTS_SCHEMA"),o(),e(31," value to "),t(32,"code"),e(33,"@NgModule"),o(),e(34," decorator of your "),t(35,"code"),e(36,"AppModule"),o()(),t(37,"li"),e(38," Use "),t(39,"code"),e(40,"*axLazyElement"),o(),e(41," directive on an element you wish to load and pass in the url of the element bundle "),o()(),t(42,"p"),e(43,"That way we get..."),o(),m(44,"demo-example-code",1),t(45,"p"),e(46," and can use "),t(47,"code"),e(48,"*axLazyElement"),o(),e(49," in the template of our component... "),o(),m(50,"demo-example-code",2),t(51,"h2"),e(52,"Using in other (and lazy loaded) modules"),o(),t(53,"p"),e(54," Any non-trivial Angular application will usually contain more than a single "),t(55,"code"),e(56,"AppModule"),o(),e(57," . "),o(),t(58,"p"),e(59,"More so, some of these additional modules could be lazy loaded."),o(),t(60,"p"),e(61," Any module which contains components which are using "),t(62,"code"),e(63,"*axLazyElement"),o(),e(64," directive has to have "),t(65,"code"),e(66,"schemas: [CUSTOM_ELEMENTS_SCHEMA]"),o(),e(67," in its "),t(68,"code"),e(69,"@NgModule"),o(),e(70," decorator configuration. Also the module has to either import "),t(71,"code"),e(72,"LazyElementsModule"),o(),e(73," . Let's have a look on the following example... "),o(),m(74,"pre",3),t(75,"p"),e(76," Or import other module (most commonly "),t(77,"code"),e(78,"SharedModule"),o(),e(79," ) which both imports and exports "),t(80,"code"),e(81,"LazyElementsModule"),o(),e(82," . "),o(),m(83,"pre",3),o()),r&2&&(i(44),l("example",n.codeExampleAppConfig)("exampleModule",n.codeExampleAppModule),i(6),l("example",n.codeExampleComponent),i(24),l("highlight",n.codeExampleModule),i(9),l("highlight",n.codeExampleSharedModule))},dependencies:[s,p,E],styles:["ol[_ngcontent-%COMP%]{margin:0 0 20px}h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]})}return a})(),x=`import { Component } from '@angular/core';

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
  elementUrl = 'https://your-org.com/elements/some-element.js';
}
`,M=`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementsModule } from '@angular-extensions/elements';

import { FeatureComponent } from './feature-component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, LazyElementsModule], // or imports: [SharedModule]
  declarations: [FeatureComponent]
})
export class FeatureModule {}
`,g=`export const appConfig: ApplicationConfig = {
  providers: [
    // other providers...
    provideAxLazyElements(),
  ]
);
`,S=`import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [BrowserModule, LazyElementsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
`,h=`import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyElementsModule } from '@angular-extensions/elements';

@NgModule({
  imports: [CommonModule, LazyElementsModule],
  exports: [CommonModule, LazyElementsModule]
})
export class SharedModule {}
`;var O=[{path:"",component:c}];export{O as default};
