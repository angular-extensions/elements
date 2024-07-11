import { jest } from '@jest/globals';
import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { HooksConfig } from './lazy-elements.interface';
import { LazyElementsModule } from './lazy-elements.module';
import { LazyElementsLoaderService } from './lazy-elements-loader.service';

describe('LazyElementsLoaderService', () => {
  let service: LazyElementsLoaderService;
  let appendChildSpy: jest.SpiedFunction<any>;
  let shouldLoadSucceed: boolean;
  let appendedScripts: Array<HTMLScriptElement>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(LazyElementsLoaderService);
    appendedScripts = [];
    shouldLoadSucceed = true;
    appendChildSpy = jest
      .spyOn(document.body, 'appendChild')
      .mockImplementation((script) => {
        appendedScripts.push(script as any);
        if (shouldLoadSucceed) {
          Promise.resolve().then(() => script.dispatchEvent(new Event('load')));
        } else {
          Promise.resolve().then(() =>
            script.dispatchEvent(new Event('error')),
          );
        }
        return script;
      }) as any;
  });

  afterEach(() => {
    appendChildSpy.mockRestore();
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });

  it('throws error if used without url', async () => {
    await expect(
      service.loadElement(undefined, 'some-element'),
    ).rejects.toThrowError(
      '@angular-extensions/elements - url for <some-element> not found',
    );
  });

  it('throws error if used without valid tag', async () => {
    await expect(
      service.loadElement('http://elements.com/some-element', ''),
    ).rejects.toThrowError(
      "@angular-extensions/elements - tag for 'http://elements.com/some-element' not found, the *axLazyElement has to be used on HTML element",
    );
  });

  it('adds a script tag into dom to load element bundle', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-element');
  });

  it('adds a script tag only once for elements with same url', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');
    service.loadElement('http://elements.com/some-element', 'some-element');
    service.loadElement('http://elements.com/some-element', 'some-element');

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-element');
  });

  it('adds multiple script tags if elements have different bundle url', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');
    service.loadElement(
      'http://elements.com/some-other-element',
      'some-other-element',
    );

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-element');
    expect(appendedScripts[1].src).toBe(
      'http://elements.com/some-other-element',
    );
  });

  it('resolves promise once element bundle was loaded', (done) => {
    const promise = service.loadElement(
      'http://elements.com/some-element',
      'some-element',
    );

    promise.then((value) => {
      expect(value).toBe(undefined);
      done();
    });
  });

  it('rejects promise once element bundle loading failed', (done) => {
    shouldLoadSucceed = false;

    const promise = service.loadElement(
      'http://elements.com/some-element',
      'some-element',
    );

    promise
      .then(() => {
        fail('should reject promise instead');
      })
      .catch((error) => {
        expect(error).toBeInstanceOf(Event);
      })
      .finally(done);
  });

  it('adds a script tag without module type', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-element');
    expect(appendedScripts[0].type).toBe('');
  });

  it('adds a script tag with module type', () => {
    service.loadElement(
      'http://elements.com/some-element',
      'some-element',
      true,
    );

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-element');
    expect(appendedScripts[0].type).toBe('module');
  });

  it('calls beforeLoad hook with name as argument before inserting tag into the DOM tree', (done) => {
    let wasHookCalled = false;
    service
      .loadElement(
        'http://elements.com/some-element',
        'some-element',
        false,
        false,
        {
          beforeLoad: (tag) => {
            expect(tag).toBe('some-element');
            expect(wasHookCalled).toBe(false);
            expect(appendChildSpy).not.toHaveBeenCalled();
            wasHookCalled = true;
          },
        },
      )
      .then(() => {
        expect(wasHookCalled).toBe(true);
        expect(appendChildSpy).toHaveBeenCalledTimes(1);
        done();
      });
  });

  it('calls afterLoad hook with name as argument after inserting tag into the DOM tree', (done) => {
    let wasHookCalled = false;
    service
      .loadElement(
        'http://elements.com/some-element',
        'some-element',
        false,
        false,
        {
          afterLoad: (tag) => {
            expect(tag).toBe('some-element');
            expect(wasHookCalled).toBe(false);
            expect(appendChildSpy).toHaveBeenCalledTimes(1);
            wasHookCalled = true;
          },
        },
      )
      .then(() => {
        expect(wasHookCalled).toBe(true);
        expect(appendChildSpy).toHaveBeenCalledTimes(1);
        done();
      });
  });

  it('waits for promise returned from the hook to resolve', (done) => {
    let promiseResolved = false;
    service
      .loadElement(
        'http://elements.com/some-element',
        'some-element',
        false,
        false,
        {
          beforeLoad: () =>
            Promise.resolve().then(() => {
              expect(appendChildSpy).not.toHaveBeenCalled();
              promiseResolved = true;
            }),
        },
      )
      .then(() => {
        expect(promiseResolved).toBe(true);
        done();
      });
  });
});

describe('LazyElementsLoaderService preconfigured with LazyElementsModule', () => {
  let service: LazyElementsLoaderService;
  let appendChildSpy: jest.SpiedFunction<any>;
  let shouldLoadSucceed: boolean;
  let appendedScripts: Array<HTMLScriptElement>;
  let rootHooks: HooksConfig;
  let elementHooks: HooksConfig;

  beforeEach(() => {
    rootHooks = {
      afterLoad: jest.fn() as any,
    };
    elementHooks = {
      afterLoad: jest.fn() as any,
    };

    TestBed.configureTestingModule({
      imports: [
        LazyElementsModule.forRoot({
          rootOptions: {
            hooks: rootHooks,
          },
          elementConfigs: [
            { tag: 'some-element', url: 'http://elements.com/some-url' },
            { tag: 'some-element', url: 'http://elements.com/some-url' },
            {
              tag: 'some-other-element',
              url: 'http://elements.com/some-other-url',
              preload: true,
            },
            {
              tag: 'some-module-element',
              url: 'http://elements.com/some-module-url',
              isModule: true,
            },
          ],
        }),
      ],
    });

    service = TestBed.inject<LazyElementsLoaderService>(
      LazyElementsLoaderService,
    );
    appendedScripts = [];
    shouldLoadSucceed = true;
    appendChildSpy = jest
      .spyOn(document.body, 'appendChild')
      .mockImplementation((script) => {
        appendedScripts.push(script as any);
        if (shouldLoadSucceed) {
          Promise.resolve().then(() => script.dispatchEvent(new Event('load')));
        } else {
          Promise.resolve().then(() =>
            script.dispatchEvent(new Event('error')),
          );
        }
        return script;
      }) as any;
  });

  afterEach(() => {
    appendChildSpy.mockRestore();
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });

  it('it is preconfigured by the module config, tags can be added only once', () => {
    expect(service).toBeTruthy();
    expect(service.configs.length).toEqual(3);
    expect(service.configs[0]).toEqual({
      tag: 'some-element',
      url: 'http://elements.com/some-url',
      isAdded: true,
    });
    expect(service.configs[1]).toEqual({
      tag: 'some-other-element',
      url: 'http://elements.com/some-other-url',
      preload: true,
      isAdded: true,
    });
    expect(service.configs[2]).toEqual({
      tag: 'some-module-element',
      url: 'http://elements.com/some-module-url',
      isModule: true,
      isAdded: true,
    });
  });

  it('adds a script tag with module type and correct url', () => {
    service.loadElement(undefined, 'some-module-element', undefined);

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-module-url');
    expect(appendedScripts[0].type).toBe('module');
  });

  it('should preload all the configurations', () => {
    service.preload();
    expect(appendChildSpy).toHaveBeenCalledTimes(2);
  });

  it('should preload only specified tags', () => {
    service.preload(['some-element']);
    expect(appendChildSpy).toHaveBeenCalledTimes(1);
  });

  it('should call root hook if hook in elementConfig was not provided', async () => {
    await service.loadElement(
      'http://elements.com/element-with-hook',
      'element-with-hook',
    );

    expect(rootHooks.afterLoad).toHaveBeenCalledTimes(1);
  });

  it('should call provided hook instead of root one if configured via element config', async () => {
    await service.loadElement(
      'http://elements.com/element-with-hook',
      'element-with-hook',
      false,
      false,
      elementHooks,
    );

    expect(rootHooks.afterLoad).not.toHaveBeenCalled();
    expect(elementHooks.afterLoad).toHaveBeenCalledTimes(1);
  });

  describe('Import Maps', () => {
    it('throws error if SystemJS is not available', async () => {
      (window as any).System = null;
      await expect(
        service.loadElement('element', 'element-using-import-map', false, true),
      ).rejects.toThrowError(
        "@angular-extensions/elements - importMap feature depends on SystemJS library to be globally loaded but none was found, thus 'element' can't be resolved. You should either load SystemJS or remove the importMap flag.",
      );
    });

    it('should call SystemJS prepareImport hook and resolve method', (done) => {
      (window as any).System = {
        prepareImport: () => null,
        resolve: () => `http://elements.com/element-using-import-map`,
      };
      const System = (window as any).System;
      const prepareImportSpy = jest.spyOn(System, 'prepareImport');
      const resolveSpy = jest.spyOn(System, 'resolve');
      service
        .loadElement('element', 'element-using-import-map', false, true)
        .then(() => {
          expect(prepareImportSpy).toHaveBeenCalledTimes(1);
          expect(resolveSpy).toHaveBeenCalledTimes(1);
          expect(resolveSpy).toHaveBeenCalledWith('element');
          done();
        });
    });
  });

  describe('ErrorHandler', () => {
    it('should be possible to handle the error thrown during the script loading', (done) => {
      shouldLoadSucceed = false;

      const errorHandler = TestBed.inject(ErrorHandler);
      const handleErrorSpy = jest.spyOn(errorHandler, 'handleError');

      const promise = service.loadElement(
        'http://elements.com/some-element',
        'some-element',
      );

      promise
        .catch(() => {
          expect(handleErrorSpy).toHaveBeenCalledTimes(1);
        })
        .finally(done);
    });
  });
});
