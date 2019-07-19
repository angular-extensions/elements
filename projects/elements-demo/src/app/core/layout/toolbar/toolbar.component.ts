import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../responsive-layout.service';

@Component({
  selector: 'demo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isResponsiveLayout: Observable<boolean>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isResponsiveLayout = this.responsiveLayoutService.isSmallOrSmaller;
  }

  toggleMenu() {
    this.toggle.emit();
  }
}
