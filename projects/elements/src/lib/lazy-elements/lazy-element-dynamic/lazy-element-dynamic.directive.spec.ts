import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyElementDynamicDirective } from './lazy-element-dynamic.directive';

@Component({
  template: `
    <div
      *axLazyElementDynamic="
        'some-tag';
        url: 'http://elements.com/some-element'
      "
    ></div>
    <div *ngIf="useWithoutTag">
      <div
        *axLazyElementDynamic="null; url: 'http://elements.com/some-element'"
      ></div>
    </div>
    <div *ngIf="useWithInvalidTag">
      <div
        *axLazyElementDynamic="
          'invalid';
          url: 'http://elements.com/some-element'
        "
      ></div>
    </div>
  `,
})
class TestHostComponent {
  useWithoutTag = false;
  useWithInvalidTag = false;
}

describe('LazyElementDirectiveDynamic', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let appendChildSpy: jest.SpyInstance;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestHostComponent, LazyElementDynamicDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    appendChildSpy = jest.spyOn(document.body, 'appendChild');
    fixture.detectChanges();
  });

  afterEach(() => {
    appendChildSpy.mockRestore();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('adds a script tag into dom to load element bundle', () => {
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.mock.calls[0][0].src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('throws error if called without tag', () => {
    expect(() => {
      testHostComponent.useWithoutTag = true;
      fixture.detectChanges();
    }).toThrow(
      new Error(
        `@angular-extensions/elements - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "null"`
      )
    );
  });

  it('throws error if called with invalid tag', () => {
    expect(() => {
      testHostComponent.useWithInvalidTag = true;
      fixture.detectChanges();
    }).toThrow(
      new Error(
        `@angular-extensions/elements - Valid tag has to be specified when using *axLazyElementDynamic directive (use *axLazyElementDynamic="'some-tag'"), got: "invalid"`
      )
    );
  });
});
