import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import { ExampleCodeComponent } from '../../../shared/example-code/example-code.component';

@Component({
  selector: 'demo-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  imports: [RouterLink, HighlightModule, ExampleCodeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestingComponent implements OnInit {
  codeExampleComponent = CODE_EXAMPLE_COMPONENT;
  codeExampleTestModule = CODE_EXAMPLE_TEST;
  codeExampleTestStandalone = CODE_EXAMPLE_TEST_STANDALONE;

  ngOnInit(): void {}
}

const CODE_EXAMPLE_COMPONENT = `@Component({
  selector: 'my-org-feature'
  standalone: true,
  imports: [LazyElementDirective]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<my-org-element *axLazyElement [context]="context"></my-org-element>',
})
export class FeatureComponent {
    context: '123'
}`;

const CODE_EXAMPLE_TEST_STANDALONE = `// ...
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
});`;

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
