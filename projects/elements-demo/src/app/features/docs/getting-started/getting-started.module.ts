import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GettingStartedRoutingModule } from './getting-started-routing.module';
import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [CommonModule, GettingStartedRoutingModule]
})
export class GettingStartedModule {}
