import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule],
  exports: [HomeComponent]
})
export class HomeModule {}
