import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyElementsModule } from '../lazy-elements.module';
import { LazyElementsLoaderService } from '../lazy-elements-loader.service';

@Component({
  template: ` <p class="loading">Spinner...</p> `,
})
class SpinnerTestComponent {}

@NgModule({
  declarations: [SpinnerTestComponent],
  entryComponents: [SpinnerTestComponent],
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
    <div *ngIf="useImportMap">
      <some-element
        *axLazyElement="'some-element'; importMap: true"
      ></some-element>
    </div>
    <div *ngIf="useElementConfig">
      <some-configured-element *axLazyElement></some-configured-element>
    </div>
    <div *ngIf="useUrlBinding">
      <some-configured-element *axLazyElement="url"></some-configured-element>
    </div>
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
  let appendChildSpy: jest.SpyInstance;
  let whenDefinedSpy: jest.SpyInstance;
  let requestAnimationFrameSpy: jest.SpyInstance;

  function getAppendChildFirstScript(): HTMLScriptElement {
    return appendChildSpy.mock.calls[0][0];
  }

  function getAppendChildSecondScript(): HTMLScriptElement {
    return appendChildSpy.mock.calls[1][0];
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TestModule,
        LazyElementsModule.forRoot({
          elementConfigs: [
            {
              tag: 'some-configured-element',
              url: 'http://elements.com/some-configured-element-module',
              loadingComponent: SpinnerTestComponent,
            },
          ],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [TestHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    appendChildSpy = jest.spyOn(document.body, 'appendChild');
    whenDefinedSpy = jest
      .spyOn(customElements, 'whenDefined')
      .mockReturnValue(
        Promise.resolve(class DummyElement extends HTMLElement {})
      );
    requestAnimationFrameSpy = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        const time = 0;
        callback(time);
        return time;
      });
    fixture.detectChanges();
  });

  afterEach(() => {
    appendChildSpy.mockRestore();
    whenDefinedSpy.mockRestore();
    requestAnimationFrameSpy.mockRestore();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('adds a script tag into dom to load element bundle', () => {
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('adds a script tag only once for elements with same url', () => {
    testHostComponent.addSameElement = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element'
    );
  });

  it('adds multiple script tags if elements have different bundle url', () => {
    testHostComponent.addOtherElement = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element'
    );
    expect(getAppendChildSecondScript().src).toBe(
      'http://elements.com/some-other-element'
    );
  });

  it('renders loading template', () => {
    expect(document.querySelector('.loading')).toBe(null);

    testHostComponent.useLoadingTemplate = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
  });

  it('removes loading template when element is loaded', async () => {
    expect(document.querySelector('.loading')).toBe(null);

    testHostComponent.useLoadingTemplate = true;
    fixture.detectChanges();

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

    expect(document.querySelector('.loading').textContent).toBe('Loading...');
    expect(document.querySelector('.error')).toBe(null);

    getAppendChildFirstScript().dispatchEvent(new ErrorEvent('error'));

    await fixture.whenStable();
    fixture.detectChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      '@angular-extensions/elements - Loading of element <some-element> failed, please provide <ng-template #error>Loading failed...</ng-template> and reference it in *axLazyElement="errorTemplate: error" to display customized error message in place of element'
    );
    expect(document.querySelector('.loading')).toBe(null);
    expect(document.querySelector('.error').textContent).toBe(
      'Loading failed...'
    );
    consoleErrorSpy.mockRestore();
  });

  it('uses type module on script tag when specified', () => {
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element'
    );
    expect(getAppendChildFirstScript().type).toBe('');

    testHostComponent.useModule = true;
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(getAppendChildSecondScript().src).toBe(
      'http://elements.com/some-element-module'
    );
    expect(getAppendChildSecondScript().type).toBe('module');
  });

  it('uses import map when specified', async () => {
    fixture.detectChanges();

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(getAppendChildFirstScript().src).toBe(
      'http://elements.com/some-element'
    );
    expect(getAppendChildFirstScript().type).toBe('');

    (window as any).System = {
      prepareImport: () => null,
      resolve: () => `http://elements.com/element-using-import-map`,
    };
    testHostComponent.useImportMap = true;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(getAppendChildSecondScript().src).toBe(
      'http://elements.com/element-using-import-map'
    );
  });

  it('uses elementConfig for the tag', () => {
    testHostComponent.useElementConfig = true;
    fixture.detectChanges();

    expect(document.querySelector('.loading').textContent).toBe('Spinner...');
  });

  it('should load another element when the `url` binding changes', () => {
    // Arrange
    const elementsLoaderService = TestBed.inject(LazyElementsLoaderService);
    const loadElementSpy = jest.spyOn(elementsLoaderService, 'loadElement');

    // Act
    testHostComponent.useUrlBinding = true;
    testHostComponent.url =
      'http://elements.com/some-configured-element-module';
    fixture.detectChanges();

    testHostComponent.url =
      'http://elements.com/some-configured-element-module-es2015';
    fixture.detectChanges();

    // Assert
    expect(loadElementSpy).toHaveBeenCalledTimes(2);
    expect(loadElementSpy.mock.calls[0][0]).toBe(
      'http://elements.com/some-configured-element-module'
    );
    expect(loadElementSpy.mock.calls[1][0]).toBe(
      'http://elements.com/some-configured-element-module-es2015'
    );
  });
});
