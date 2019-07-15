import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'demo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isSmallScreen: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.isSmallScreen = this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.XSmall])
      .pipe(map(result => result.matches));
  }

  toggleMenu() {
    this.toggle.emit();
  }
}
