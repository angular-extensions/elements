import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../responsive-layout.service';

@Component({
  selector: 'demo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isResponsiveLayout: Observable<boolean>;

  private readonly responsiveLayoutService = inject(ResponsiveLayoutService);

  ngOnInit() {
    this.isResponsiveLayout = this.responsiveLayoutService.isSmallOrSmaller;
  }

  toggleMenu() {
    this.toggle.emit();
  }
}
