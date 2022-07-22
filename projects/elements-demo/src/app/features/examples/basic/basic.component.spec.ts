import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightModule } from 'ngx-highlightjs';

import { LazyElementsModule } from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { HIGHLIGHT_JS_PROVIDER } from '../../../core/higlightjs/highlightjs.config';
import { SharedModule } from '../../../shared/shared.module';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BasicComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [LazyElementsModule, HighlightModule, SharedModule],
      providers: [HIGHLIGHT_JS_PROVIDER],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
