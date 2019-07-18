import { TestBed } from '@angular/core/testing';

import { ResponsiveLayoutService } from './responsive-layout.service';

describe('ResponsiveLayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsiveLayoutService = TestBed.get(
      ResponsiveLayoutService
    );
    expect(service).toBeTruthy();
  });
});
