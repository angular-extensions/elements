import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'demo-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class ExamplesComponent implements OnInit {
  ngOnInit() {}
}
