import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../../../shared/shared.module';
import { HIGHLIGHT_JS_PROVIDER } from '../../../core/higlightjs/highlightjs.config';

import { ConfigurationComponent } from './configuration.component';

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;
  let fixture: ComponentFixture<ConfigurationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HighlightModule, RouterTestingModule, SharedModule],
      declarations: [ConfigurationComponent],
      providers: [HIGHLIGHT_JS_PROVIDER],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
