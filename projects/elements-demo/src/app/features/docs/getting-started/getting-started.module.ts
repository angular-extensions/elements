import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../../../shared/shared.module';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [HighlightModule, SharedModule, GettingStartedRoutingModule],
})
export class GettingStartedModule {}
