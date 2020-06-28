import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';

import {
  LazyElementModuleOptions,
  LazyElementsModule,
} from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { SharedModule } from '../../../shared/shared.module';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'wired-button',
      url:
        'https://unpkg.com/wired-elements@1.0.0/dist/wired-elements.bundled.js',
    },
  ],
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [DynamicComponent],
  imports: [
    HighlightModule,
    FormsModule,
    LazyElementsModule.forFeature(options),
    SharedModule,
    DynamicRoutingModule,
  ],
})
export class DynamicModule {}
