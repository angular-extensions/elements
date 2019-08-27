import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { SharedModule } from '../../../shared/shared.module';

import { BasicComponent } from './basic.component';
import { LazyElementsModule } from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        HighlightModule.forRoot({
          languages: () => [{ name: 'typescript', func: typescript }]
        }),
        SharedModule,
        LazyElementsModule.forRoot([
          {
            tag: 'ion-item',
            url: 'https://unpkg.com/@ionic/core@4.6.2/dist/ionic/ionic.js'
          }
        ])
      ],
      declarations: [BasicComponent]
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
