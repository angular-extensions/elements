import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq.component';

@NgModule({
  declarations: [FaqComponent],
  imports: [SharedModule, FaqRoutingModule]
})
export class FaqModule {}
