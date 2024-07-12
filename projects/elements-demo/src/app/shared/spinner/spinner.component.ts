import { Component, OnInit } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'demo-spinner',
  standalone: true,
  imports: [MatProgressSpinner],
  template: `
    <mat-spinner [diameter]="20" />
  `,
})
export class SpinnerComponent implements OnInit {
  ngOnInit() {}
}
