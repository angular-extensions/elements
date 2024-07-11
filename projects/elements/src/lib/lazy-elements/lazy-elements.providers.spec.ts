import { provideRouter, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import {
  provideAxLazyElements,
  provideAxLazyElementsConfigs,
} from './lazy-elements.providers';

const config = {
  elementConfigs: [
    { tag: 'some-element', url: 'http://elements.com/some-url' },
    { tag: 'some-element', url: 'http://elements.com/some-url' },
    {
      tag: 'some-other-element',
      url: 'http://elements.com/some-other-url',
    },
    {
      tag: 'some-module-element',
      url: 'http://elements.com/some-module-url',
      isModule: true,
    },
  ],
};

@NgModule({
  providers: [provideAxLazyElementsConfigs([])],
})
class LazyFeature {}

@NgModule({
  providers: [provideAxLazyElements({})],
})
class LazyFeatureToTestRootConfig {}

describe('provideAxLazyElements', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideAxLazyElements(config),
        provideRouter([
          {
            path: 'feature',
            loadChildren: () => LazyFeature,
          },
          {
            path: 'root',
            loadChildren: () => LazyFeatureToTestRootConfig,
          },
        ]),
      ],
    });
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('provideAxLazyElementsConfigs() can be called twice', async () => {
    let caughtError: Error | null = null;
    try {
      await router.navigate(['/feature']);
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError).toBeNull();
  });

  it('provideAxLazyElements() cannot be called twice', async () => {
    let caughtError: Error | null = null;
    try {
      await router.navigate(['/root']);
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError).toBeDefined();
    expect(caughtError.message).toContain(
      'provideAxLazyElements() called twice. Lazy feature modules should use provideAxLazyElementsConfigs() instead.',
    );
  });
});
