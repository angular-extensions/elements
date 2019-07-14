import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [ToolbarComponent, NavigationComponent, FooterComponent],
  imports: [RouterModule, SharedModule],
  exports: [ToolbarComponent, NavigationComponent, FooterComponent]
})
export class CoreModule {}
