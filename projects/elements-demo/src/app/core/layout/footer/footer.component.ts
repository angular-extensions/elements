import { Component } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'demo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year = new Date().getFullYear();
  version = environment.version;
}
