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
        label: 'Use cases',
        url: 'docs/use-cases'
      },
      {
        label: 'Change detection',
        url: 'docs/change-detection'
      },
      {
        label: 'API',
        url: 'docs/api'
      },
      {
        label: 'FAQ',
        url: 'docs/faq'
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
      }
    ]
  },
  {
    label: 'CONTRIBUTE',
    url: 'contribute'
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
