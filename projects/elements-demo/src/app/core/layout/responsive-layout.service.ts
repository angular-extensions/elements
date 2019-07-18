import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveLayoutService {
  // basic
  isXSmallScreen: Observable<boolean>;
  isSmallScreen: Observable<boolean>;
  isMediumScreen: Observable<boolean>;
  isLargeScreen: Observable<boolean>;
  isXLargeScreen: Observable<boolean>;

  // derived
  columnCount: Observable<number>;
  isResponsiveLayout: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isXSmallScreen = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map(result => result.matches));
    this.isSmallScreen = this.breakpointObserver
      .observe([Breakpoints.Small])
      .pipe(map(result => result.matches));
    this.isMediumScreen = this.breakpointObserver
      .observe([Breakpoints.Medium])
      .pipe(map(result => result.matches));
    this.isLargeScreen = this.breakpointObserver
      .observe([Breakpoints.Large])
      .pipe(map(result => result.matches));
    this.isXLargeScreen = this.breakpointObserver
      .observe([Breakpoints.XLarge])
      .pipe(map(result => result.matches));

    this.columnCount = combineLatest([
      this.isXSmallScreen,
      this.isSmallScreen,
      this.isMediumScreen,
      this.isLargeScreen
    ]).pipe(
      map(([isXSmall, isSmall, isMedium, isLarge]) =>
        isXSmall ? 1 : isSmall ? 2 : isMedium ? 2 : isLarge ? 3 : 4
      )
    );

    this.isResponsiveLayout = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map(result => result.matches));
  }
}
