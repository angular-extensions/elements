import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    NavigationComponent,
    SponsorComponent,
    FooterComponent,
  ],
  imports: [
    // vendor
    RouterModule,
    HighlightModule,

    // local
    SharedModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          xml: () => import('highlight.js/lib/languages/xml'),
        },
      },
    },
  ],
  exports: [
    ToolbarComponent,
    NavigationComponent,
    SponsorComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
