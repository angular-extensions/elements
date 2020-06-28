import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';

@NgModule({
  declarations: [ExamplesComponent],
  imports: [SharedModule, ExamplesRoutingModule],
})
export class ExamplesModule {}
