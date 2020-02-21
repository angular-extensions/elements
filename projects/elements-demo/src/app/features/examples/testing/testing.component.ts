import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  codeExampleComponent = CODE_EXAMPLE_COMPONENT;
  codeExampleTest = CODE_EXAMPLE_TEST;

  constructor() {}

  ngOnInit(): void {}
}

const CODE_EXAMPLE_COMPONENT = `@Component({
  selector: 'my-org-feature'
  template: '<my-org-element *axLazyElement [context]="context"></my-org-element>'
})
export class FeatureComponent {
    context: '123'
}`;

const CODE_EXAMPLE_TEST = `// ...
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
});`;
