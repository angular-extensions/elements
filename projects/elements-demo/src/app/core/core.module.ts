import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HIGHLIGHT_JS_PROVIDER } from './higlightjs/highlightjs.config';

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
  providers: [HIGHLIGHT_JS_PROVIDER],
  exports: [
    ToolbarComponent,
    NavigationComponent,
    SponsorComponent,
    FooterComponent,
  ],
})
export class CoreModule {}
