import{b as d}from"./chunk-AZHYLC5A.js";import"./chunk-OHYOZSZW.js";import"./chunk-V4Y5VTPI.js";import{c as p}from"./chunk-2TUE56NI.js";import"./chunk-MOZBASQ3.js";import{c as s}from"./chunk-IUMN36FE.js";import"./chunk-72YBKSO7.js";import{Db as r,Eb as n,Fb as t,Gb as l,Ya as a,Zb as e,ib as c}from"./chunk-NXE37KCX.js";import"./chunk-EQDQRRRY.js";var g=(()=>{class o{codeExampleComponent=x;codeExampleTestModule=E;codeExampleTestStandalone=C;ngOnInit(){}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=c({type:o,selectors:[["demo-testing"]],decls:49,vars:3,consts:[[1,"quick-nav"],["routerLink",".","fragment","basic-testing"],[1,"wrapper"],["id","basic-testing"],[1,"content"],[1,"description"],[3,"example"],[3,"example","exampleModule"]],template:function(i,m){i&1&&(n(0,"div",0)(1,"h3"),e(2,"Quick navigation"),t(),n(3,"ul")(4,"li")(5,"a",1),e(6,"Basic testing"),t()()()(),n(7,"div",2)(8,"h1"),e(9,"Testing"),t(),n(10,"h2",3),e(11,"Basic testing"),t(),n(12,"div",4)(13,"div",5)(14,"h3"),e(15,"Component"),t(),n(16,"p"),e(17," Let's say we have a component which uses "),n(18,"code"),e(19,"<my-org-element>"),t(),e(20," element in its template with the help of "),n(21,"code"),e(22,"*axLazyElement"),t(),e(23," directive. "),t(),l(24,"demo-example-code",6),n(25,"p"),e(26," We would like to test if the component is passing correct data to the element based on some interactions but at the same time, we would like to NOT depend on real element for our tests... "),t(),n(27,"h3"),e(28,"Test"),t(),n(29,"p"),e(30," We want to mock our element in the test and for that we can use standalone "),n(31,"code"),e(32,"LazyElementTestingDirective"),t(),e(33," and "),n(34,"code"),e(35,"LazyElementDynamicTestingDirective"),t(),e(36," (or "),n(37,"code"),e(38,"LazyElementsTestingModule"),t(),e(39," which comes with two mock directives for both "),n(40,"code"),e(41,"*axLazyElement"),t(),e(42," and "),n(43,"code"),e(44,"*axLazyElementDynamic"),t(),e(45," ). "),t(),n(46,"p"),e(47," Their behavior was adjusted so that they just render the host immediately without trying to lazy load element, display loading or error "),t(),l(48,"demo-example-code",7),t()()()),i&2&&(a(24),r("example",m.codeExampleComponent),a(24),r("example",m.codeExampleTestStandalone)("exampleModule",m.codeExampleTestModule))},dependencies:[s,p,d],styles:["[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}"]})}return o})(),x=`@Component({
  selector: 'my-org-feature'
  standalone: true,
  imports: [LazyElementDirective]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<my-org-element *axLazyElement [context]="context"></my-org-element>',
})
export class FeatureComponent {
    context: '123'
}`,C=`// ...
import { LazyElementTestingDirective } from '@angular-extensions/elements/testing';

@Component({
    standalone: true,
    selector: 'my-org-element',
    template: '<p>{{ context() }}</p>'
})
export class MockElementComponent {
    context = input<string>();
}

describe('FeatureComponent', () => {
    let fixture: ComponentFixture<FeatureComponent>;
    let component: FeatureComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FeatureComponent, MockElementComponent],
        })
        .overrideComponent(FeatureComponent, {
          remove: { imports: [ LazyElementDirective ] },
          add: { imports: [ LazyElementTestingDirective ] }
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeatureComponent);
        component = fixture.componentInstance;
    });

    it('should receive context', () => {
        component.context.set('changed');
        fixture.detectChanges();

        const element fixture.debugElement.query(By.css('my-org-element')).nativeElement;
        expect(element.textContent.trim()).toBe('changed');
    });
});`,E=`// ...
import { LazyElementsTestingModule } from '@angular-extensions/elements/testing';

@Component({
    selector: 'my-org-element',
    template: '<p>{{context}}</p>'
})
export class MockElementComponent {
    @Input() context: string;
}

describe('FeatureComponent', () => {
    let fixture: ComponentFixture<FeatureComponent>;
    let component: FeatureComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CommonModule,LazyElementsTestingModule],
            declarations: [FeatureComponent, MockElementComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeatureComponent);
        component = fixture.componentInstance;
    });

    it('should receive context', () => {
        component.context = 'changed'
        fixture.detectChanges();

        const element fixture.debugElement.query(By.css('my-org-element')).nativeElement;
        expect(element.textContent.trim()).toBe('changed');
    });
});`;var O=[{path:"",component:g}];export{O as default};
