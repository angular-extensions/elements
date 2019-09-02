import { MatSidenav } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';
import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';
import { RefreshService } from './core/refresh.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  demoRootCssClass = '';

  @ViewChild('sidenav') sidenav: MatSidenav;

  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);
  isSmallOrSmaller: Observable<boolean>;
  sidenavMode: Observable<string>;

  constructor(
    private responsiveLayoutService: ResponsiveLayoutService,
    private swUpdate: SwUpdate,
    private refreshService: RefreshService
  ) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.refreshService.checkUpdate();
    }

    this.isSmallOrSmaller = combineLatest(
      this.responsiveLayoutService.isSmallOrSmaller,
      this.responsiveLayoutService.isLargeOrBigger
    ).pipe(
      delay(1),
      tap(([isSmall, isLarge]) => {
        this.demoRootCssClass = '';
        if (isSmall) {
          this.demoRootCssClass = 'responsive';
        }
        if (isLarge) {
          this.demoRootCssClass = 'responsive-large';
        }
      }),
      map(([isSmall]) => isSmall)
    );

    this.navOpened = combineLatest([
      this.isSmallOrSmaller,
      this.navToggled
    ]).pipe(
      map(([isSmallScreen, navToggled]) => (!isSmallScreen ? true : navToggled))
    );

    this.sidenavMode = this.isSmallOrSmaller.pipe(
      map(isSmallOrSmaller => (isSmallOrSmaller ? 'push' : 'side'))
    );
  }

  onNavToggle() {
    this.navToggled.next(!this.navToggled.value);
  }

  onBackdropClick() {
    this.navToggled.next(false);
  }
}
