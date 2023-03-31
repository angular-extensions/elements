import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { HighlightModule } from 'ngx-highlightjs';

import { MockHighlightDirective } from '../../../testing/mock-highlight.directive';

import { ConfigurationComponent } from './configuration.component';

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent;
  let fixture: ComponentFixture<ConfigurationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ConfigurationComponent],
      providers: [{ provide: MATERIAL_SANITY_CHECKS, useValue: false }],
    })
      .overrideComponent(ConfigurationComponent, {
        remove: { imports: [HighlightModule] },
        add: { imports: [MockHighlightDirective] },
      })
      .compileComponents();
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
