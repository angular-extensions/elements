import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ResponsiveLayoutService } from '../responsive-layout.service';

@Component({
  selector: 'demo-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
})
export class ToolbarComponent {
  readonly #responsiveLayoutService = inject(ResponsiveLayoutService);

  navOpened = input(false);
  // eslint-disable-next-line @angular-eslint/no-output-native
  toggle = output<void>();

  isResponsiveLayout = toSignal(this.#responsiveLayoutService.isSmallOrSmaller);
}
