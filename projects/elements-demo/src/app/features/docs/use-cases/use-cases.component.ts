import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'demo-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.scss'],
  imports: [RouterLink],
})
export class UseCasesComponent implements OnInit {
  ngOnInit() {}
}
