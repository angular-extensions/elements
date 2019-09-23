import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LazyElementsModule } from './lazy-elements.module';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

const config = {
  elementConfigs: [
    { tag: 'some-element', url: 'http://elements.com/some-url' },
    { tag: 'some-element', url: 'http://elements.com/some-url' },
    {
      tag: 'some-other-element',
      url: 'http://elements.com/some-other-url'
    },
    {
      tag: 'some-module-element',
      url: 'http://elements.com/some-module-url',
      isModule: true
    }
  ]
};

@NgModule({
  imports: [LazyElementsModule.forFeature({})]
})
class ForFeatureModule {}

@NgModule({
  imports: [LazyElementsModule.forRoot({})]
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
            loadChildren: () => ForFeatureModule
          },
          {
            path: 'root',
            loadChildren: () => ForRootModule
          }
        ])
      ]
    });
    router = TestBed.get(Router);
    router.initialNavigation();
  });

  it('For feature can be call twice', fakeAsync(() => {
    let error;
    try {
      router.navigate(['/feature']);
      tick();
    } catch (err) {
      error = err;
    }
    expect(error).toBeUndefined();
  }));

  it('For root can not be call twice', fakeAsync(() => {
    let error;
    try {
      router.navigate(['/root']);
      tick();
    } catch (err) {
      error = err;
    }
    expect(error).toBeDefined();
  }));
});
