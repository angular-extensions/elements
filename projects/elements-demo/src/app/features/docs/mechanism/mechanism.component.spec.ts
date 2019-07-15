import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanismComponent } from './mechanism.component';

describe('MechanismComponent', () => {
  let component: MechanismComponent;
  let fixture: ComponentFixture<MechanismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MechanismComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
