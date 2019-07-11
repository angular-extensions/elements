import { TestBed } from '@angular/core/testing';

import { LazyElementsLoaderService } from './lazy-elements-loader.service';

describe('LazyElementsLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LazyElementsLoaderService = TestBed.get(LazyElementsLoaderService);
    expect(service).toBeTruthy();
  });
});
