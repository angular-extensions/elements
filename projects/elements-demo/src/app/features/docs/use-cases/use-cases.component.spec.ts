import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCasesComponent } from './use-cases.component';

describe('UseCasesComponent', () => {
  let component: UseCasesComponent;
  let fixture: ComponentFixture<UseCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UseCasesComponent]
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
