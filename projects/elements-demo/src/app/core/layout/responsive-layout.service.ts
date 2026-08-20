import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

const OBSERVED_BREAKPOINTS = [
  Breakpoints.XSmall,
  Breakpoints.Small,
  Breakpoints.Medium,
  Breakpoints.Large,
  Breakpoints.XLarge,
];

@Injectable({
  providedIn: 'root',
})
export class ResponsiveLayoutService {
  readonly #breakpointObserver = inject(BreakpointObserver);

  readonly #breakpointState = toSignal(
    this.#breakpointObserver.observe(OBSERVED_BREAKPOINTS),
    {
      initialValue: {
        matches: this.#breakpointObserver.isMatched(OBSERVED_BREAKPOINTS),
        breakpoints: Object.fromEntries(
          OBSERVED_BREAKPOINTS.map((breakpoint) => [
            breakpoint,
            this.#breakpointObserver.isMatched(breakpoint),
          ]),
        ),
      },
    },
  );

  readonly isXSmallScreen = computed(
    () => this.#breakpointState().breakpoints[Breakpoints.XSmall] ?? false,
  );
  readonly isSmallScreen = computed(
    () => this.#breakpointState().breakpoints[Breakpoints.Small] ?? false,
  );
  readonly isMediumScreen = computed(
    () => this.#breakpointState().breakpoints[Breakpoints.Medium] ?? false,
  );
  readonly isLargeScreen = computed(
    () => this.#breakpointState().breakpoints[Breakpoints.Large] ?? false,
  );
  readonly isXLargeScreen = computed(
    () => this.#breakpointState().breakpoints[Breakpoints.XLarge] ?? false,
  );

  readonly columnCount = computed(() =>
    this.isXSmallScreen()
      ? 1
      : this.isSmallScreen() || this.isMediumScreen()
        ? 2
        : this.isLargeScreen()
          ? 3
          : 4,
  );
  readonly isSmallOrSmaller = computed(
    () => this.isXSmallScreen() || this.isSmallScreen(),
  );
  readonly isLargeOrBigger = computed(
    () => this.isLargeScreen() || this.isXLargeScreen(),
  );
}
