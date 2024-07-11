import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { LazyElementsModule } from './lazy-elements.module';

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
  imports: [LazyElementsModule.forFeature({})],
})
class ForFeatureModule {}

@NgModule({
  imports: [LazyElementsModule.forRoot({})],
})
class ForRootModule {}

describe('LazyElementsModule', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LazyElementsModule.forRoot(config),
        RouterTestingModule.withRoutes([
          {
            path: 'feature',
            loadChildren: () => ForFeatureModule,
          },
          {
            path: 'root',
            loadChildren: () => ForRootModule,
          },
        ]),
      ],
    });
    router = TestBed.inject<Router>(Router);
    router.initialNavigation();
  });

  it('forFeature() can be called twice', async () => {
    let caughtError: Error | null = null;
    try {
      await router.navigate(['/feature']);
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError).toBeNull();
  });

  it('forRoot() cannot be called twice', async () => {
    let caughtError: Error | null = null;
    try {
      await router.navigate(['/root']);
    } catch (error) {
      caughtError = error;
    }
    expect(caughtError).toBeDefined();
    expect(caughtError.message).toContain(
      'LazyElementsModule.forRoot() called twice. Feature modules should use LazyElementsModule.forFeature() instead.',
    );
  });
});
