import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  simple = 'simple';
  complex = { id: 1 };

  ngOnInit(): void {
    setTimeout(() => {}, 5000);
  }

  onSimpleChange(newSimpleValue) {
    this.simple = newSimpleValue;
  }

  onComplexChange(newComplexValue) {
    this.complex = newComplexValue;
  }


}
