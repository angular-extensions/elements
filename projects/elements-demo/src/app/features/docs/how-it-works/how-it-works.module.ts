import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../../../shared/shared.module';

import { HowItWorksRoutingModule } from './how-it-works-routing.module';
import { HowItWorksComponent } from './how-it-works.component';

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [
    RouterModule,
    HighlightModule,
    SharedModule,
    HowItWorksRoutingModule
  ]
})
export class HowItWorksModule {}
