import { TestBed } from '@angular/core/testing';
import { DefaultLazyElementsStateService } from './lazy-elements-state.service';

describe('DefaultLazyElementsStateService', () => {
  let service: DefaultLazyElementsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = new DefaultLazyElementsStateService();
  });

  it('is created', () => {
    expect(service).toBeTruthy();
  });

  it('adds a element to registry', () => {
    const url = 'http://elements.com/some-element';
    const elementReference = new Promise<void>((resolve, reject) => {
      const resolveReference = resolve;
      const rejectReference = reject;
    });
    service.setElement(url, elementReference);
    expect(service.hasElement(url)).toBeTruthy();
    expect(service.getElement(url)).toBe(elementReference);
  });
});
