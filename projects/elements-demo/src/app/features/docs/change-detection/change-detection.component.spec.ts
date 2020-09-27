import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { SharedModule } from '../../../shared/shared.module';

import { ChangeDetectionComponent } from './change-detection.component';

describe('ChangeDetectionComponent', () => {
  let component: ChangeDetectionComponent;
  let fixture: ComponentFixture<ChangeDetectionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HighlightModule, SharedModule],
        declarations: [ChangeDetectionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
