import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';

@NgModule({
  declarations: [ExamplesComponent],
  imports: [CommonModule, ExamplesRoutingModule]
})
export class ExamplesModule {}
