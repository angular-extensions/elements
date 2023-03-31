import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'demo-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
  standalone: true,
  imports: [RouterLink, MatCardModule],
})
export class ApiComponent implements OnInit {
  ngOnInit() {}
}
