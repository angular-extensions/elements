import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyElementDirective } from './lazy-element.directive';

@Component({
  template: `
    <some-element
      *axLazyElement="'http://elements.com/some-element'"
    ></some-element>
    <div *ngIf="addSameElement">
      <some-element
        *axLazyElement="'http://elements.com/some-element'"
      ></some-element>
    </div>
    <div *ngIf="addOtherElement">
      <some-other-element
        *axLazyElement="'http://elements.com/some-other-element'"
      ></some-other-element>
    </div>
    <div *ngIf="useLoadingTemplate">
      <ng-template #loading>
        <p class="loading">Loading...</p>
      </ng-template>
      <some-element
        *axLazyElement="'http://elements.com/some-element'; loading: loading"
      ></some-element>
    </div>
  `
})
class TestHostComponent {
  addSameElement = false;
  addOtherElement = false;
  useLoadingTemplate = false;
}

describe('LazyElementDirective', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let appendChildSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestHostComponent, LazyElementDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    appendChildSpy = spyOn(document.body, 'appendChild').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('adds a script tag into dom to load element bundle', () => {
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('adds a script tag only once for elements with same url', () => {
    component.addSameElement = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('adds multiple script tags if elements have different bundle url', () => {
    component.addOtherElement = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe(
      'http://elements.com/some-element'
    );
    expect(appendChildSpy.calls.argsFor(1)[0].src).toBe(
      'http://elements.com/some-other-element'
    );
  });

  it('renders loading template', () => {
    expect(document.querySelector('.loading')).toBe(null);

    component.useLoadingTemplate = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
  });

  it('removes loading template when element is loaded', done => {
    expect(document.querySelector('.loading')).toBe(null);

    component.useLoadingTemplate = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');

    appendChildSpy.calls.argsFor(0)[0].onload();

    fixture.detectChanges();

    setTimeout(() => {
      expect(document.querySelector('.loading')).toBe(null);
      done();
    });
  });
});
