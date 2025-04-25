import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  signal,
  TemplateRef,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'demo-example',
  imports: [MatButton, MatIcon, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content />
    @if (!showExample()) {
      <button mat-flat-button color="accent" (click)="showExample.set(true)">
        <mat-icon>play_arrow</mat-icon>
        Run
      </button>
    } @else {
      <ng-container *ngTemplateOutlet="example()"></ng-container>
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin: 0 20px 20px 0;
      border: 2px solid #eee;
      padding: 20px;
      border-radius: 10px;
    }
  `,
})
export class ExampleComponent {
  showExample = signal(false);

  example = contentChild(TemplateRef);
}
