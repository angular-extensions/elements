import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

import { LazyElementsModule } from '../../../elements/src/lib/lazy-elements/lazy-elements.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './features/home/home.module';
import { EagerModule } from './features/eager/eager.module';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [
    // vendor
    BrowserModule,
    BrowserAnimationsModule,

    // material
    MatToolbarModule,
    MatButtonModule,

    // the library module
    LazyElementsModule,

    // local
    AppRoutingModule,
    HomeModule,
    EagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
