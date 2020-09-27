import { TestBed } from '@angular/core/testing';

import {
  LazyElementsLoaderService,
  HooksConfig,
} from './lazy-elements-loader.service';
import { LazyElementsModule } from './lazy-elements.module';

describe('LazyElementsLoaderService', () => {
  let service: LazyElementsLoaderService;
  let appendChildSpy: jasmine.Spy;
  let shouldLoadSucceed: boolean;
  let appendedScripts: Array<HTMLScriptElement>;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject<LazyElementsLoaderService>(
      LazyElementsLoaderService
    );
    appendedScripts = [];
    shouldLoadSucceed = true;
    appendChildSpy = spyOn(document.body, 'appendChild').and.callFake(
      (script) => {
        appendedScripts.push(script as any);
        if (shouldLoadSucceed) {
          Promise.resolve().then(() => script.dispatchEvent(new Event('load')));
        } else {
          Promise.resolve().then(() =>
            script.dispatchEvent(new Event('error'))
          );
        }
        return script;
      }
    );
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });

  it('throws error if used without url', () => {
    expect(() => service.loadElement(undefined, 'some-element')).toThrowError(
      '@angular-extensions/elements - url for <some-element> not found'
    );
  });

  it('throws error if used without valid tag', () => {
    expect(() =>
      service.loadElement('http://elements.com/some-element', '')
    ).toThrowError(
      "@angular-extensions/elements - tag for 'http://elements.com/some-element' not found, the *axLazyElement has to be used on HTML element"
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
      'some-other-element'
    );

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(appendedScripts[0].src).toBe('http://elements.com/some-element');
    expect(appendedScripts[1].src).toBe(
      'http://elements.com/some-other-element'
    );
  });

  it('resolves promise once element bundle was loaded', (done) => {
    const promise = service.loadElement(
      'http://elements.com/some-element',
      'some-element'
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
      'some-element'
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
      true
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
        }
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
        }
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
        }
      )
      .then(() => {
        expect(promiseResolved).toBe(true);
        done();
      });
  });
});

describe('LazyElementsLoaderService preconfigured with LazyElementsModule', () => {
  let service: LazyElementsLoaderService;
  let appendChildSpy: jasmine.Spy;
  let shouldLoadSucceed: boolean;
  let appendedScripts: Array<HTMLScriptElement>;
  let afterLoadRootSpy: jasmine.Spy;
  let afterLoadElementSpy: jasmine.Spy;
  const rootHooks: HooksConfig = {
    afterLoad: () => void 0,
  };
  const elementHooks: HooksConfig = {
    afterLoad: () => void 0,
  };

  beforeEach(() => {
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
      LazyElementsLoaderService
    );
    appendedScripts = [];
    shouldLoadSucceed = true;
    afterLoadRootSpy = spyOn(rootHooks, 'afterLoad');
    afterLoadElementSpy = spyOn(elementHooks, 'afterLoad');
    appendChildSpy = spyOn(document.body, 'appendChild').and.callFake(
      (script) => {
        appendedScripts.push(script as any);
        if (shouldLoadSucceed) {
          Promise.resolve().then(() => script.dispatchEvent(new Event('load')));
        } else {
          Promise.resolve().then(() =>
            script.dispatchEvent(new Event('error'))
          );
        }
        return script;
      }
    );
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

  it('should call root hook if hook in elementConfig was not provided', (done) => {
    service
      .loadElement('http://elements.com/element-with-hook', 'element-with-hook')
      .then(() => {
        expect(afterLoadRootSpy).toHaveBeenCalledTimes(1);
        done();
      });
  });

  it('should call provided hook instead of root one if configured via element config', (done) => {
    service
      .loadElement(
        'http://elements.com/element-with-hook',
        'element-with-hook',
        false,
        false,
        elementHooks
      )
      .then(() => {
        expect(afterLoadRootSpy).not.toHaveBeenCalled();
        expect(afterLoadElementSpy).toHaveBeenCalledTimes(1);
        done();
      });
  });
});
