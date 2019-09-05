import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import {
  LazyElementModuleOptions,
  LazyElementsModule
} from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { SharedModule } from '../../../shared/shared.module';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'ion-button',
      url: 'https://unpkg.com/@ionic/core@4.6.2/dist/ionic/ionic.js'
    }
  ]
};

@NgModule({
  declarations: [DynamicComponent],
  imports: [
    HighlightModule,
    LazyElementsModule.forFeature(options),
    SharedModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule {}
