import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../../../shared/shared.module';
import { HIGHLIGHT_JS_PROVIDER } from '../../../core/higlightjs/highlightjs.config';

import { GettingStartedComponent } from './getting-started.component';

describe('GettingStartedComponent', () => {
  let component: GettingStartedComponent;
  let fixture: ComponentFixture<GettingStartedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HighlightModule, SharedModule],
      declarations: [GettingStartedComponent],
      providers: [HIGHLIGHT_JS_PROVIDER],
    }).compileComponents();
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
