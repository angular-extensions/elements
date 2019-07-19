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
        label: 'How it works',
        url: 'docs/how-it-works'
      },
      {
        label: 'API',
        url: 'docs/api'
      }
    ]
  },
  {
    label: 'EXAMPLES',
    url: 'examples',
    children: [
      {
        label: 'Basic',
        url: 'examples/basic'
      },
      {
        label: 'Lazy Loading',
        url: 'examples/lazy'
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
