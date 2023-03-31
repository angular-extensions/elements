import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementsModule } from '@angular-extensions/elements';

import { MockHighlightDirective } from '../../../testing/mock-highlight.directive';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [LazyElementsModule, RouterTestingModule, TestingComponent],
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    })
      .overrideComponent(TestingComponent, {
        remove: { imports: [HighlightModule] },
        add: { imports: [MockHighlightDirective] },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
