import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UseCasesRoutingModule } from './use-cases-routing.module';
import { UseCasesComponent } from './use-cases.component';

@NgModule({
  declarations: [UseCasesComponent],
  imports: [CommonModule, UseCasesRoutingModule],
})
export class UseCasesModule {}
