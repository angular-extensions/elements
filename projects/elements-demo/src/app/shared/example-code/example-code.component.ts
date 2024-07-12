import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'demo-example-code',
  standalone: true,
  imports: [Highlight, MatTabGroup, MatTab],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (example() && exampleModule()) {
      <mat-tab-group
        mat-stretch-tabs="false"
        mat-align-tabs="center"
        animationDuration="0"
      >
        <mat-tab label="Standalone APIs">
          <pre [highlight]="example()" [language]="language()"></pre>
        </mat-tab>
        <mat-tab label="NgModule APIs">
          <pre [highlight]="exampleModule()" [language]="language()"></pre>
        </mat-tab>
      </mat-tab-group>
    } @else {
      <pre [highlight]="example()" [language]="language()"></pre>
    }
  `,
  styles: `
    :host {
      display: block;
      margin: 10px 0 0 0;
    }
    pre {
      margin: 10px 0 0 0;
    }
  `,
})
export class ExampleCodeComponent {
  example = input<string>();
  exampleModule = input<string>();
  language = input<string>('typescript');
}
