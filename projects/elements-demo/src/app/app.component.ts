import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  demoRootCssClass = '';

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);
  isResponsiveLayout: Observable<boolean>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isResponsiveLayout = this.responsiveLayoutService.isResponsiveLayout.pipe(
      delay(1),
      tap(value => (this.demoRootCssClass = value ? 'responsive' : ''))
    );

    this.navOpened = combineLatest([
      this.isResponsiveLayout,
      this.navToggled
    ]).pipe(
      map(([isSmallScreen, navToggled]) => (!isSmallScreen ? true : navToggled))
    );
  }

  onNavToggle() {
    this.navToggled.next(!this.navToggled.value);
  }

  onBackdropClick() {
    this.navToggled.next(false);
  }
}
