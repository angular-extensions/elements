import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ComponentFactoryResolver,
  ViewContainerRef,
  NgModule
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyElementDirective } from './lazy-element.directive';
import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

@Component({
  template: `
    <p class="loading">Spinner...</p>
  `
})
class SpinnerComponent {}

@NgModule({
  declarations: [SpinnerComponent],
  entryComponents: [SpinnerComponent]
})
class TestModule {}

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
        *axLazyElement="
          'http://elements.com/some-element';
          loadingTemplate: loading
        "
      ></some-element>
    </div>
    <div *ngIf="useErrorTemplate">
      <ng-template #loading>
        <p class="loading">Loading...</p>
      </ng-template>
      <ng-template #error>
        <p class="error">Loading failed...</p>
      </ng-template>
      <some-element
        *axLazyElement="
          'http://elements.com/some-element';
          loadingTemplate: loading;
          errorTemplate: error
        "
      ></some-element>
    </div>
    <div *ngIf="useModule">
      <some-element
        *axLazyElement="'http://elements.com/some-element-module'; module: true"
      ></some-element>
    </div>
    <div *ngIf="useElementConfig">
      <some-element *axLazyElement></some-element>
    </div>
  `
})
class TestHostComponent {
  addSameElement = false;
  addOtherElement = false;
  useLoadingTemplate = false;
  useErrorTemplate = false;
  useModule = false;
  useElementConfig = false;
}

describe('LazyElementDirective', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let appendChildSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestHostComponent, LazyElementDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    appendChildSpy = spyOn(document.body, 'appendChild').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('adds a script tag into dom to load element bundle', () => {
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('adds a script tag only once for elements with same url', () => {
    testHostComponent.addSameElement = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('adds multiple script tags if elements have different bundle url', () => {
    testHostComponent.addOtherElement = true;
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

    testHostComponent.useLoadingTemplate = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
  });

  it('removes loading template when element is loaded', done => {
    expect(document.querySelector('.loading')).toBe(null);

    testHostComponent.useLoadingTemplate = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');

    appendChildSpy.calls.argsFor(0)[0].onload();

    fixture.detectChanges();

    setTimeout(() => {
      expect(document.querySelector('.loading')).toBe(null);
      done();
    });
  });

  it('renders error template loading of element failed', done => {
    const consoleErrorSpy: jasmine.Spy = spyOn(console, 'error').and.stub();
    expect(document.querySelector('.loading')).toBe(null);
    expect(document.querySelector('.error')).toBe(null);

    testHostComponent.useErrorTemplate = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
    expect(document.querySelector('.error')).toBe(null);

    appendChildSpy.calls.argsFor(0)[0].onerror('404');

    fixture.detectChanges();

    setTimeout(() => {
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        '@angular-extensions/elements - Loading of element <some-element> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element'
      );
      expect(document.querySelector('.loading')).toBe(null);
      expect(document.querySelector('.error').textContent).toBe(
        'Loading failed...'
      );
      consoleErrorSpy.and.callThrough();
      done();
    });
  });

  it('uses type module on script tag when specified', () => {
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe(
      'http://elements.com/some-element'
    );
    expect(appendChildSpy.calls.argsFor(0)[0].type).toBe('');

    testHostComponent.useModule = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(appendChildSpy.calls.argsFor(1)[0].src).toBe(
      'http://elements.com/some-element-module'
    );
    expect(appendChildSpy.calls.argsFor(1)[0].type).toBe('module');
  });

  it('uses elementConfig for the tag', () => {
    const lazyElementsLoaderService = TestBed.get(LazyElementsLoaderService);
    spyOn(lazyElementsLoaderService, 'getElementConfig').and.returnValue({
      tag: 'some-element',
      url: 'http://elements.com/some-element-module',
      loadingComponent: SpinnerComponent
    });

    testHostComponent.useElementConfig = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Spinner...');
  });
});
