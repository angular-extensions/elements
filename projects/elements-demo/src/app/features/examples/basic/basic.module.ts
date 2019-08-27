import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { SharedModule } from '../../../shared/shared.module';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { LazyElementsModule } from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

export function hljsLanguages() {
  return [{ name: 'typescript', func: typescript }];
}

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BasicComponent],
  imports: [
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    SharedModule,
    BasicRoutingModule,
    LazyElementsModule.forFeature([
      {
        tag: 'deckgo-qrcode',
        url:
          'https://unpkg.com/@deckdeckgo/qrcode@1.0.0-alpha.9/dist/deckdeckgo-qrcode/deckdeckgo-qrcode.js'
      }
    ])
  ]
})
export class BasicModule {}
