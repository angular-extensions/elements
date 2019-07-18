import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  counter = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
}
