import { jest } from '@jest/globals';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyElementsModule } from '../lazy-elements.module';
import { LazyElementsLoaderService } from '../lazy-elements-loader.service';
import { LazyElementDirective } from './lazy-element.directive';

@Component({
  standalone: true,
  template: `
    <p class="loading">Spinner...</p>
  `,
})
class SpinnerTestComponent {}

@Component({
  standalone: true,
  imports: [SpinnerTestComponent, LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <some-element
      *axLazyElement="'http://elements.com/some-element'"
    ></some-element>
    @if (addSameElement) {
      <some-element
        *axLazyElement="'http://elements.com/some-element'"
      ></some-element>
    }
    @if (addOtherElement) {
      <some-other-element
        *axLazyElement="'http://elements.com/some-other-element'"
      ></some-other-element>
    }

    @if (useLoadingTemplate) {
      <ng-template #loading>
        <p class="loading">Loading...</p>
      </ng-template>
      <some-element
        *axLazyElement="
          'http://elements.com/some-element';
          loadingTemplate: loading
        "
      ></some-element>
    }

    @if (useErrorTemplate) {
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
    }

    @if (useModule) {
      <some-element
        *axLazyElement="'http://elements.com/some-element-module'; module: true"
      ></some-element>
      <some-configured-module-element
        *axLazyElement
      ></some-configured-module-element>
    }

    @if (useImportMap) {
      <some-element
        *axLazyElement="'some-element'; importMap: true"
      ></some-element>
    }

    @if (useElementConfig) {
      <some-configured-element *axLazyElement></some-configured-element>
    }

    @if (useUrlBinding) {
      <some-configured-element *axLazyElement="url"></some-configured-element>
    }
  `,
})
class TestHostComponent {
  addSameElement = false;
  addOtherElement = false;
  useLoadingTemplate = false;
  useErrorTemplate = false;
  useModule = false;
  useImportMap = false;
  useElementConfig = false;

  useUrlBinding = false;
  url: string | null = null;
}

describe('LazyElementDirective', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let appendChildSpy: jest.MockedFunction<any>;
  let whenDefinedSpy: jest.MockedFunction<any>;

  function appendedScriptElements(): HTMLScriptElement[] {
    return appendChildSpy.mock.calls.map((args) => args[0]);
  }

  function getAppendChildFirstScript(): HTMLScriptElement {
    return appendChildSpy.mock.calls[0][0];
  }

  function getAppendChildSecondScript(): HTMLScriptElement {
    return appendChildSpy.mock.calls[1][0];
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestHostComponent,
        LazyElementsModule.forRoot({
          elementConfigs: [
            {
              tag: 'some-configured-element',
              url: 'http://elements.com/some-configured-element-module',
              loadingComponent: SpinnerTestComponent,
            },
            {
              tag: 'some-configured-module-element',
              url: 'http://elements.com/some-configured-element-module',
              loadingComponent: SpinnerTestComponent,
              isModule: true,
            },
          ],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    appendChildSpy = jest.spyOn(document.body, 'appendChild') as any;
    whenDefinedSpy = jest
      .spyOn(customElements, 'whenDefined')
      .mockReturnValue(
        Promise.resolve(class DummyElement extends HTMLElement {}),
      ) as any;
    fixture.detectChanges();
    await fixture.whenRenderingDone();
  });

  afterEach(() => {
    appendChildSpy.mockRestore();
    whenDefinedSpy.mockRestore();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('adds a script tag into dom to load element bundle', () => {
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element',
    );
  });

  it('adds a script tag only once for elements with same url', () => {
    testHostComponent.addSameElement = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element',
    );
  });

  it('adds multiple script tags if elements have different bundle url', async () => {
    testHostComponent.addOtherElement = true;
    fixture.detectChanges();

    await fixture.whenStable();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element',
    );
    expect(getAppendChildSecondScript().src).toBe(
      'http://elements.com/some-other-element',
    );
  });

  it('renders loading template', async () => {
    expect(document.querySelector('.loading')).toBe(null);

    testHostComponent.useLoadingTemplate = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
  });

  it('removes loading template when element is loaded', async () => {
    expect(document.querySelector('.loading')).toBe(null);

    testHostComponent.useLoadingTemplate = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');

    getAppendChildFirstScript().dispatchEvent(new Event('load'));

    await fixture.whenStable();
    fixture.detectChanges();

    expect(document.querySelector('.loading')).toBe(null);
  });

  it('renders error template loading of element failed', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    expect(document.querySelector('.loading')).toBe(null);
    expect(document.querySelector('.error')).toBe(null);

    testHostComponent.useErrorTemplate = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
    expect(document.querySelector('.error')).toBe(null);

    getAppendChildFirstScript().dispatchEvent(new ErrorEvent('error'));

    await fixture.whenStable();
    fixture.detectChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      '@angular-extensions/elements - Loading of element <some-element> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element',
    );
    expect(document.querySelector('.loading')).toBe(null);
    expect(document.querySelector('.error').textContent).toBe(
      'Loading failed...',
    );
    consoleErrorSpy.mockRestore();
  });

  it('uses type module on script tag when specified', async () => {
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element',
    );
    expect(getAppendChildFirstScript().type).toBe('');

    testHostComponent.useModule = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(appendChildSpy).toHaveBeenCalledTimes(3);
    expect(appendedScriptElements().map((script) => script.type)).toEqual([
      '',
      'module',
      'module',
    ]);
  });

  it('uses import map when specified', async () => {
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element',
    );
    expect(getAppendChildFirstScript().type).toBe('');

    (window as any).System = {
      prepareImport: () => null,
      resolve: () => `http://elements.com/element-using-import-map`,
    };
    testHostComponent.useImportMap = true;
    fixture.detectChanges();
    await fixture.whenStable();
    await fixture.whenRenderingDone();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(getAppendChildSecondScript().src).toBe(
      'http://elements.com/element-using-import-map',
    );
  });

  it('uses elementConfig for the tag', async () => {
    testHostComponent.useElementConfig = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(document.querySelector('.loading').textContent).toBe('Spinner...');
  });

  it('should load another element when the `url` binding changes', async () => {
    // Arrange
    const elementsLoaderService = TestBed.inject(LazyElementsLoaderService);
    const loadElementSpy = jest.spyOn(elementsLoaderService, 'loadElement');

    // Act
    testHostComponent.useUrlBinding = true;
    testHostComponent.url =
      'http://elements.com/some-configured-element-module';
    fixture.detectChanges();
    await fixture.whenStable();

    testHostComponent.url =
      'http://elements.com/some-configured-element-module-es2015';
    fixture.detectChanges();
    await fixture.whenStable();

    // Assert
    expect(loadElementSpy).toHaveBeenCalledTimes(2);
    expect(loadElementSpy.mock.calls[0][0]).toBe(
      'http://elements.com/some-configured-element-module',
    );
    expect(loadElementSpy.mock.calls[1][0]).toBe(
      'http://elements.com/some-configured-element-module-es2015',
    );
  });
});
