import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'demo-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class ContributeComponent implements OnInit {
  ngOnInit() {}
}
