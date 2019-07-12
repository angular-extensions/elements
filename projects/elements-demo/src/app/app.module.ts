import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatIconRegistry, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,

    // material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,

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
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/github.svg')
    );
  }
}
