import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from '../../../shared/shared.module';

import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { ChangeDetectionComponent } from './change-detection.component';

@NgModule({
  declarations: [ChangeDetectionComponent],
  imports: [HighlightModule, SharedModule, ChangeDetectionRoutingModule],
})
export class ChangeDetectionModule {}
