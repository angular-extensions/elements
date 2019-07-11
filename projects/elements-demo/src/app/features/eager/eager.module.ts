import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerComponent } from './eager/eager.component';

@NgModule({
  declarations: [EagerComponent],
  imports: [CommonModule],
  exports: [EagerComponent]
})
export class EagerModule {}
