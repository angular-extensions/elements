import { Component, OnInit } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'demo-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss'],
  imports: [HighlightModule],
})
export class ChangeDetectionComponent implements OnInit {
  codeExampleShareNgZone = CODE_EXAMPLE_SHARE_NG_ZONE;

  ngOnInit() {}
}

export const CODE_EXAMPLE_SHARE_NG_ZONE = `// in parent app (app.module.ts)
export class AppModule {
  private ngZone = inject(NgZone);

  constructor() {
    (window as any).ngZone = this.ngZone // store ngZone reference on the window object
  }
}

// in element (main.ts)
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: (window as any).ngZone }) // use parent ngZone
`;
