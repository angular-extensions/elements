"use strict";(self.webpackChunkelements_demo=self.webpackChunkelements_demo||[]).push([[949],{9949:(h,i,n)=>{n.r(i),n.d(i,{default:()=>p});var a=n(1180),s=n(7866),e=n(2223);let g=(()=>{class t{constructor(){(0,a.Z)(this,"codeExampleShareNgZone",l)}ngOnInit(){}}return(0,a.Z)(t,"\u0275fac",function(o){return new(o||t)}),(0,a.Z)(t,"\u0275cmp",e.Xpm({type:t,selectors:[["demo-change-detection"]],standalone:!0,features:[e.jDz],decls:49,vars:1,consts:[[1,"wrapper"],[3,"highlight"],["href","https://github.com/angular/angular/issues/31870","target","_blank"]],template:function(o,u){1&o&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Change detection"),e.qZA(),e.TgZ(3,"p"),e._uU(4," In this section we're going to curate and discuss various change detection related issues and lessons learned when using Angular Elements. "),e.qZA(),e.TgZ(5,"h2"),e._uU(6," RxJs stream runs in a wrong (parent / outer) zone.js [Angular Elements] "),e.qZA(),e.TgZ(7,"h3"),e._uU(8,"Description"),e.qZA(),e.TgZ(9,"p"),e._uU(10," This issue happens when using "),e.TgZ(11,"code"),e._uU(12,"@angular/element"),e.qZA(),e._uU(13," inside of a parent Angular application. The parent application and element will NOT run in the same zone. This will lead to problems with change detection inside of the element when the "),e.TgZ(14,"code"),e._uU(15,"rxjs"),e.qZA(),e._uU(16," stream was triggered by the change of the "),e.TgZ(17,"code"),e._uU(18,"@Input() prop"),e.qZA(),e._uU(19," originating in the parent application. "),e.qZA(),e.TgZ(20,"p"),e._uU(21," The stream will run in parent zone (instead of element zone) so any async operation (like backend request or using "),e.TgZ(22,"code"),e._uU(23,"debounceTime()"),e.qZA(),e._uU(24," operator) will not trigger change detection of the element so the stream data will not be rendered... "),e.qZA(),e.TgZ(25,"h3"),e._uU(26,"Solution"),e.qZA(),e.TgZ(27,"ol")(28,"li"),e._uU(29," Do NOT use "),e.TgZ(30,"code"),e._uU(31,"zone.js"),e.qZA(),e._uU(32," in your Angular element and trigger change detection manually "),e.qZA(),e.TgZ(33,"li"),e._uU(34," Use single (parent) "),e.TgZ(35,"code"),e._uU(36,"NgZone"),e.qZA(),e._uU(37," also for both the application and the element. "),e._UZ(38,"pre",1),e.qZA(),e.TgZ(39,"li"),e._uU(40," Use "),e.TgZ(41,"code"),e._uU(42,"import 'zone.js/dist/zone-patch-rxjs';"),e.qZA(),e._uU(43," in your Angular element. This will fix it BUT if the parent application (or ANY other lib used by the parent application) already has this import then the one in the element will be ignored and hence not solving the problem. "),e.qZA()(),e.TgZ(44,"p"),e._uU(45," Check out detailed description of the "),e.TgZ(46,"a",2),e._uU(47,"issue"),e.qZA(),e._uU(48," and some of the proposed solutions... "),e.qZA()()),2&o&&(e.xp6(38),e.Q6J("highlight",u.codeExampleShareNgZone))},dependencies:[s._l,s.y$],styles:["h2[_ngcontent-%COMP%]{margin:40px 0 10px;font-weight:700}h3[_ngcontent-%COMP%]{margin:20px 0 5px;font-weight:700}ol[_ngcontent-%COMP%]{margin:0 0 20px}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:70%}"]})),t})();const l="// in parent app (app.module.ts)\nexport class AppModule {\n  private ngZone = inject(NgZone);\n\n  constructor() {\n    (window as any).ngZone = this.ngZone // store ngZone reference on the window object\n  }\n}\n\n// in element (main.ts)\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule, { ngZone: (window as any).ngZone }) // use parent ngZone\n",p=[{path:"",component:g}]}}]);