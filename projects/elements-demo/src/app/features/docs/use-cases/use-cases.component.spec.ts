import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseCasesComponent } from './use-cases.component';

describe('UseCasesComponent', () => {
  let component: UseCasesComponent;
  let fixture: ComponentFixture<UseCasesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UseCasesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
