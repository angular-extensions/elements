import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementsModule } from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { HIGHLIGHT_JS_PROVIDER } from '../../../core/higlightjs/highlightjs.config';
import { SharedModule } from '../../../shared/shared.module';

import { DynamicComponent } from './dynamic.component';

describe('DynamicComponent', () => {
  let component: DynamicComponent;
  let fixture: ComponentFixture<DynamicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [LazyElementsModule, HighlightModule, SharedModule],
      providers: [HIGHLIGHT_JS_PROVIDER],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
