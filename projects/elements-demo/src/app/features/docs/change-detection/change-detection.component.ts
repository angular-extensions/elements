import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.scss']
})
export class ChangeDetectionComponent implements OnInit {
  codeExampleShareNgZone = CODE_EXAMPLE_SHARE_NG_ZONE;

  constructor() {}

  ngOnInit() {}
}

export const CODE_EXAMPLE_SHARE_NG_ZONE = `// in parent app (app.module.ts)
export class AppModule {
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone // store ngZone reference on the window object
  }
}

// in element (main.ts)
platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: (window as any).ngZone }) // use parent ngZone
`;
