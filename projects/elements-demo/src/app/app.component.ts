import { SwUpdate } from '@angular/service-worker';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  type MatDrawerMode,
  MatSidenavModule,
} from '@angular/material/sidenav';

import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';
import { RefreshService } from './core/refresh.service';
import { SponsorComponent } from './core/sponsor/sponsor.component';
import { ToolbarComponent } from './core/layout/toolbar/toolbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavigationComponent } from './core/layout/navigation/navigation.component';
import { IconRegistryService } from './core/icon-registry.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '[class]': 'demoRootCssClass()',
  },
  imports: [
    RouterOutlet,
    SponsorComponent,
    ToolbarComponent,
    FooterComponent,
    NavigationComponent,
    MatSidenavModule,
  ],
})
export class AppComponent implements OnInit {
  private readonly responsiveLayoutService = inject(ResponsiveLayoutService);
  private readonly swUpdate = inject(SwUpdate);
  private readonly refreshService = inject(RefreshService);
  private readonly registerIconService = inject(IconRegistryService);

  readonly navToggled = signal(false);
  readonly isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  readonly navOpened = computed(
    () => !this.isSmallOrSmaller() || this.navToggled(),
  );
  readonly sidenavMode = computed<MatDrawerMode>(() =>
    this.isSmallOrSmaller() ? 'push' : 'side',
  );
  readonly demoRootCssClass = computed(() => {
    if (this.responsiveLayoutService.isLargeOrBigger()) {
      return 'responsive-large';
    }

    return this.isSmallOrSmaller() ? 'responsive' : '';
  });

  constructor() {
    this.registerIconService.registerIcon();
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.refreshService.checkUpdate();
    }
  }

  onNavToggle() {
    this.navToggled.update((isOpen) => !isOpen);
  }

  onBackdropClick() {
    this.navToggled.set(false);
  }
}
