import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  treeControl = new FlatTreeControl<any>(
    node => node.level,
    node => node.expandable
  );

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
