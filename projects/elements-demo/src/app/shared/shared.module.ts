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
  MatSnackBarModule,
  MatSliderModule,
  MatFormFieldModule,
  MatSlideToggleModule
} from '@angular/material';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorComponent } from './error/error.component';
import { RootErrorComponent } from './root-error/root-error.component';

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
  MatSnackBarModule,
  MatSliderModule,
  MatFormFieldModule,
  MatSlideToggleModule
];

@NgModule({
  declarations: [SpinnerComponent, ErrorComponent, RootErrorComponent],
  imports: [CommonModule, ...ANGULAR_MATERIAL_MODULES],
  exports: [CommonModule, ...ANGULAR_MATERIAL_MODULES, SpinnerComponent]
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
