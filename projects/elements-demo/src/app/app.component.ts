import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);
  isResponsiveLayout: Observable<boolean>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isResponsiveLayout = this.responsiveLayoutService.isResponsiveLayout;

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
