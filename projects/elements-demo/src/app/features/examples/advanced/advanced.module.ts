import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import {
  LazyElementModuleOptions,
  LazyElementsModule
} from '../../../../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { SharedModule } from '../../../shared/shared.module';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { AdvancedComponent } from './advanced.component';

const options: LazyElementModuleOptions = {
  elementConfigs: [
    {
      tag: 'ion-button',
      url: 'https://unpkg.com/@ionic/core@4.6.2/dist/ionic/ionic.js'
    },
    {
      tag: 'mwc-switch',
      url: 'https://unpkg.com/@material/mwc-switch@0.6.0/mwc-switch.js?module',
      isModule: true
    },
    {
      tag: 'mwc-checkbox',
      url:
        'https://unpkg.com/@material/mwc-checkbox@0.6.0/mwc-checkbox.js?module'
    }
  ]
};

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AdvancedComponent],
  imports: [
    HighlightModule,
    LazyElementsModule.forFeature(options),
    SharedModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule {}
