import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatIconRegistry,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';

const ANGULAR_MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatExpansionModule,
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...ANGULAR_MATERIAL_MODULES],
  exports: [CommonModule, ...ANGULAR_MATERIAL_MODULES]
})
export class SharedModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logo/twitter.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/logo.svg')
    );
  }
}
