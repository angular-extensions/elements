import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RootErrorComponent } from './root-error.component';

describe('RootErrorComponent', () => {
  let component: RootErrorComponent;
  let fixture: ComponentFixture<RootErrorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RootErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
