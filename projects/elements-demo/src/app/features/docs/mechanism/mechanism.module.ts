import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanismRoutingModule } from './mechanism-routing.module';
import { MechanismComponent } from './mechanism.component';

@NgModule({
  declarations: [MechanismComponent],
  imports: [CommonModule, MechanismRoutingModule]
})
export class MechanismModule {}
