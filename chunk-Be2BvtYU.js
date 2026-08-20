import{Dt as Rh,Ht as Uu,Lt as Tw,Nn as jD,Tn as gI,Y as Ji,mt as Oh}from"./chunk-C4_gtfUn.js";import"./chunk-BelJIGP0.js";import"./chunk-DkaxpU-d.js";import"./chunk-B2P_CqHU.js";import{a as he,t as Dt}from"./main-UNIKYDVJ.js";import{t as Nn}from"./chunk-D8LWnu7z.js";var g=(()=>{class o{codeExampleComponent=x;codeExampleTestModule=E;codeExampleTestStandalone=C;ngOnInit(){}static ɵfac=function(i){return new(i||o)};static ɵcmp=gI({type:o,selectors:[[`demo-testing`]],decls:49,vars:3,consts:[[1,`quick-nav`],[`routerLink`,`.`,`fragment`,`basic-testing`],[1,`wrapper`],[`id`,`basic-testing`],[1,`content`],[1,`description`],[3,`example`],[3,`example`,`exampleModule`]],template:function(i,m){i&1&&(Ji(0,`div`,0)(1,`h3`),Tw(2,`Quick navigation`),Uu(),Ji(3,`ul`)(4,`li`)(5,`a`,1),Tw(6,`Basic testing`),Uu()()()(),Ji(7,`div`,2)(8,`h1`),Tw(9,`Testing`),Uu(),Ji(10,`h2`,3),Tw(11,`Basic testing`),Uu(),Ji(12,`div`,4)(13,`div`,5)(14,`h3`),Tw(15,`Component`),Uu(),Ji(16,`p`),Tw(17,` Let's say we have a component which uses `),Ji(18,`code`),Tw(19,`<my-org-element>`),Uu(),Tw(20,` element in its template with the help of `),Ji(21,`code`),Tw(22,`*axLazyElement`),Uu(),Tw(23,` directive. `),Uu(),Oh(24,`demo-example-code`,6),Ji(25,`p`),Tw(26,` We would like to test if the component is passing correct data to the element based on some interactions but at the same time, we would like to NOT depend on real element for our tests... `),Uu(),Ji(27,`h3`),Tw(28,`Test`),Uu(),Ji(29,`p`),Tw(30,` We want to mock our element in the test and for that we can use standalone `),Ji(31,`code`),Tw(32,`LazyElementTestingDirective`),Uu(),Tw(33,` and `),Ji(34,`code`),Tw(35,`LazyElementDynamicTestingDirective`),Uu(),Tw(36,` (or `),Ji(37,`code`),Tw(38,`LazyElementsTestingModule`),Uu(),Tw(39,` which comes with two mock directives for both `),Ji(40,`code`),Tw(41,`*axLazyElement`),Uu(),Tw(42,` and `),Ji(43,`code`),Tw(44,`*axLazyElementDynamic`),Uu(),Tw(45,` ). `),Uu(),Ji(46,`p`),Tw(47,` Their behavior was adjusted so that they just render the host immediately without trying to lazy load element, display loading or error `),Uu(),Oh(48,`demo-example-code`,7),Uu()()()),i&2&&(jD(24),Rh(`example`,m.codeExampleComponent),jD(24),Rh(`example`,m.codeExampleTestStandalone)(`exampleModule`,m.codeExampleTestModule))},dependencies:[Dt,he,Nn],styles:[`[_nghost-%COMP%]{position:relative}.quick-nav[_ngcontent-%COMP%]{display:none;position:fixed;top:105px;left:75%;right:0;padding:0 20px}.quick-nav[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;opacity:.5}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:none}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .quick-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{color:#d32f2f}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:0 0 50px}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}.wrapper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{flex:1.5}.responsive-large[_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .quick-nav[_ngcontent-%COMP%]{display:block}.responsive-large[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], .responsive-large   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{width:60%}`]})}return o})();var x=`@Component({
  selector: 'my-org-feature'
  standalone: true,
  imports: [LazyElementDirective]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<my-org-element *axLazyElement [context]="context()"></my-org-element>',
})
export class FeatureComponent {
    readonly context = signal('123');
}`;var C=`// ...
import { LazyElementTestingDirective } from '@angular-extensions/elements/testing';

@Component({
    standalone: true,
    selector: 'my-org-element',
    template: '<p>{{ context() }}</p>'
})
export class MockElementComponent {
    readonly context = input<string>();
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
});`;var E=`// ...
import { LazyElementsTestingModule } from '@angular-extensions/elements/testing';

@Component({
    selector: 'my-org-element',
    template: '<p>{{ context() }}</p>'
})
export class MockElementComponent {
    readonly context = input<string>();
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
        component.context.set('changed')
        fixture.detectChanges();

        const element fixture.debugElement.query(By.css('my-org-element')).nativeElement;
        expect(element.textContent.trim()).toBe('changed');
    });
});`;var O=[{path:``,component:g}];export{O as default};