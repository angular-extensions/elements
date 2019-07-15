import { Component, OnInit } from '@angular/core';

const NAVIGATION = [
  {
    label: 'HOME',
    url: 'home'
  },
  {
    label: 'DOCS',
    url: 'docs',
    children: [
      {
        label: 'Getting started',
        url: 'docs/getting-started'
      },
      {
        label: 'Mechanism',
        url: 'docs/mechanism'
      }
    ]
  },
  {
    label: 'EXAMPLES',
    url: 'examples',
    children: [
      {
        label: 'Basic',
        url: 'basic'
      },
      {
        label: 'Lazy Loading',
        url: 'lazy'
      }
    ]
  }
];

@Component({
  selector: 'demo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation = NAVIGATION;

  constructor() {}

  ngOnInit() {}
}
