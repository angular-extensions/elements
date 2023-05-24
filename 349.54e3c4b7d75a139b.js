"use strict";(self.webpackChunkelements_demo=self.webpackChunkelements_demo||[]).push([[349],{349:(h,s,t)=>{t.r(s),t.d(s,{default:()=>d});var o=t(1180),r=t(1415),g=t(3657),c=t(7866),e=t(2223);let p=(()=>{class n{constructor(){(0,o.Z)(this,"codeExampleComponent",m),(0,o.Z)(this,"codeExampleTest",u)}ngOnInit(){}}return(0,o.Z)(n,"\u0275fac",function(i){return new(i||n)}),(0,o.Z)(n,"\u0275cmp",e.Xpm({type:n,selectors:[["demo-testing"]],standalone:!0,features:[e.jDz],decls:43,vars:2,consts:[[1,"quick-nav"],["routerLink",".","fragment","basic-testing"],[1,"wrapper"],["id","basic-testing"],[1,"content"],[1,"description"],[3,"highlight"]],template:function(i,l){1&i&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Quick navigation"),e.qZA(),e.TgZ(3,"ul")(4,"li")(5,"a",1),e._uU(6,"Basic testing"),e.qZA()()()(),e.TgZ(7,"div",2)(8,"h1"),e._uU(9,"Testing"),e.qZA(),e.TgZ(10,"h2",3),e._uU(11,"Basic testing"),e.qZA(),e.TgZ(12,"div",4)(13,"div",5)(14,"h3"),e._uU(15,"Component"),e.qZA(),e.TgZ(16,"p"),e._uU(17," Let's say we have a component which uses "),e.TgZ(18,"code"),e._uU(19,"<my-org-element>"),e.qZA(),e._uU(20," element in its template with the help of "),e.TgZ(21,"code"),e._uU(22,"*axLazyElement"),e.qZA(),e._uU(23," directive. "),e.qZA(),e._UZ(24,"pre",6),e.TgZ(25,"p"),e._uU(26," We would like to test if the component is passing correct data to the element based on some interactions but at the same time, we would like to NOT depend on real element for our tests... "),e.qZA(),e.TgZ(27,"h3"),e._uU(28,"Test"),e.qZA(),e.TgZ(29,"p"),e._uU(30," We want to mock our element in the test and for that we can use "),e.TgZ(31,"code"),e._uU(32,"LazyElementsTestingModule"),e.qZA(),e._uU(33," which comes with two mock directives for both "),e.TgZ(34,"code"),e._uU(35,"*axLazyElement"),e.qZA(),e._uU(36," and "),e.TgZ(37,"code"),e._uU(38,"*axLazyElementDynamic"),e.qZA(),e._uU(39,". "),e.qZA(),e.TgZ(40,"p"),e._uU(41," Their behavior was adjusted so that they just render the host immediately without trying to lazy load element, display loading or error "),e.qZA(),e._UZ(42,"pre",6),e.qZA()()()),2&i&&(e.xp6(24),e.Q6J("highlight",l.codeExampleComponent),e.xp6(18),e.Q6J("highlight",l.codeExampleTest))},dependencies:[r.rH,g.zB,c._l,c.y$],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]})),n})();const m="@Component({\n  selector: 'my-org-feature'\n  template: '<my-org-element *axLazyElement [context]=\"context\"></my-org-element>'\n})\nexport class FeatureComponent {\n    context: '123'\n}",u="// ...\nimport { LazyElementsTestingModule } from '@angular-extensions/elements/testing';\n\n@Component({\n    selector: 'my-org-element',\n    template: '<p>{{context}}</p>'\n})\nexport class MockElementComponent {\n    @Input() context: string;\n}\n\ndescribe('FeatureComponent', () => {\n    let fixture: ComponentFixture<FeatureComponent>;\n    let component: FeatureComponent;\n\n    beforeEach(() => {\n        TestBed.configureTestingModule({\n            imports: [CommonModule,LazyElementsTestingModule],\n            declarations: [FeatureComponent, MockElementComponent]\n        }).compileComponents();\n    });\n\n    beforeEach(() => {\n        fixture = TestBed.createComponent(FeatureComponent);\n        component = fixture.componentInstance;\n    });\n\n    it('should receive context', () => {\n        component.context = 'changed'\n        fixture.detectChanges();\n\n        const element fixture.debugElement.query(By.css('my-org-element')).nativeElement;\n        expect(element.textContent.trim()).toBe('changed');\n    });\n});",d=[{path:"",component:p}]}}]);