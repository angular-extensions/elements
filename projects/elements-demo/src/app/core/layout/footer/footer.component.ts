import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'demo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [MatButtonModule],
})
export class FooterComponent {
  year = new Date().getFullYear();
  version = environment.version;
}
