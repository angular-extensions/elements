import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootErrorComponent } from './root-error.component';

describe('RootErrorComponent', () => {
  let component: RootErrorComponent;
  let fixture: ComponentFixture<RootErrorComponent>;

  beforeEach(async(() => {
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
