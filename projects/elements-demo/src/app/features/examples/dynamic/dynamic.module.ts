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
      tag: 'wired-button',
      url:
        'https://unpkg.com/wired-elements@latest/dist/wired-elements.bundled.js'
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
