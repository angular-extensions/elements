import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { HighlightModule } from 'ngx-highlightjs';

import { MockHighlightDirective } from '../../../testing/mock-highlight.directive';

import { ChangeDetectionComponent } from './change-detection.component';

describe('ChangeDetectionComponent', () => {
  let component: ChangeDetectionComponent;
  let fixture: ComponentFixture<ChangeDetectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChangeDetectionComponent],
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    })
      .overrideComponent(ChangeDetectionComponent, {
        remove: { imports: [HighlightModule] },
        add: { imports: [MockHighlightDirective] },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
