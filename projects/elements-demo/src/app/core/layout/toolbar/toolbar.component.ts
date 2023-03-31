import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../responsive-layout.service';

@Component({
  selector: 'demo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
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
