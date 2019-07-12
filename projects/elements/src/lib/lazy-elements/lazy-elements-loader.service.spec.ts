import { TestBed } from '@angular/core/testing';

import { LazyElementsLoaderService } from './lazy-elements-loader.service';

describe('LazyElementsLoaderService', () => {
  let service: LazyElementsLoaderService;
  let appendChildSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(LazyElementsLoaderService);
    appendChildSpy = spyOn(document.body, 'appendChild').and.stub();
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
    expect(() => service.loadElement('http://elements.com/some-element', '')).toThrowError(
      "@angular-extensions/elements - tag for 'http://elements.com/some-element' not found, the *axLazyElement has to be used on HTML element"
    );
  });

  it('adds a script tag into dom to load element bundle', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe('http://elements.com/some-element');
  });

  it('adds a script tag only once for elements with same url', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');
    service.loadElement('http://elements.com/some-element', 'some-element');
    service.loadElement('http://elements.com/some-element', 'some-element');

    expect(appendChildSpy).toHaveBeenCalledTimes(1);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe('http://elements.com/some-element');
  });

  it('adds multiple script tags if elements have different bundle url', () => {
    service.loadElement('http://elements.com/some-element', 'some-element');
    service.loadElement('http://elements.com/some-other-element', 'some-other-element');

    expect(appendChildSpy).toHaveBeenCalledTimes(2);
    expect(appendChildSpy.calls.argsFor(0)[0].src).toBe('http://elements.com/some-element');
    expect(appendChildSpy.calls.argsFor(1)[0].src).toBe('http://elements.com/some-other-element');
  });

  it('resolves promise once element bundle was loaded', done => {
    const promise = service.loadElement('http://elements.com/some-element', 'some-element');

    appendChildSpy.calls.argsFor(0)[0].onload();

    promise.then(value => {
      expect(value).toBe(undefined);
      done();
    });
  });
});
