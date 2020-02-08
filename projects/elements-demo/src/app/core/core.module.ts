import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

export function hljsLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

@NgModule({
  declarations: [ToolbarComponent, NavigationComponent, FooterComponent],
  imports: [
    // vendor
    RouterModule,
    HighlightModule,

    // local
    SharedModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: hljsLanguages()
      }
    }
  ],
  exports: [ToolbarComponent, NavigationComponent, FooterComponent]
})
export class CoreModule {}
