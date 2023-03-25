import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { HighlightModule } from 'ngx-highlightjs';

import { GettingStartedComponent } from './getting-started.component';
import { MockHighlightDirective } from '../../../testing/mock-highlight.directive';

describe('GettingStartedComponent', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [GettingStartedComponent],
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    })
      .overrideComponent(GettingStartedComponent, {
        remove: { imports: [HighlightModule] },
        add: { imports: [MockHighlightDirective] },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
