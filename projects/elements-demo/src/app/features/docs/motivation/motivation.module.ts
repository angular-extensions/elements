import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotivationRoutingModule } from './motivation-routing.module';
import { MotivationComponent } from './motivation.component';

@NgModule({
  declarations: [MotivationComponent],
  imports: [CommonModule, MotivationRoutingModule]
})
export class MotivationModule {}
