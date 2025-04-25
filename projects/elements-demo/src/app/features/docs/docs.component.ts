import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'demo-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  imports: [RouterOutlet],
})
export class DocsComponent implements OnInit {
  ngOnInit() {}
}
