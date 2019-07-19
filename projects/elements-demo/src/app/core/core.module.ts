import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';

import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

export function hljsLanguages() {
  return [{ name: 'typescript', func: typescript }];
}

@NgModule({
  declarations: [ToolbarComponent, NavigationComponent, FooterComponent],
  imports: [
    // vendor
    RouterModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),

    // local
    SharedModule
  ],
  exports: [ToolbarComponent, NavigationComponent, FooterComponent]
})
export class CoreModule {}
