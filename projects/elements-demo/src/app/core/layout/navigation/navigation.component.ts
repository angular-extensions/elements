import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

const NAVIGATION = [
  {
    label: 'HOME',
    url: 'home',
  },
  {
    label: 'DOCS',
    url: 'docs',
    children: [
      {
        label: 'Getting started',
        url: 'docs/getting-started',
      },
      {
        label: 'How it works',
        url: 'docs/how-it-works',
      },
      {
        label: 'Configuration',
        url: 'docs/configuration',
      },
      {
        label: 'Use cases',
        url: 'docs/use-cases',
      },
      {
        label: 'Change detection',
        url: 'docs/change-detection',
      },
      {
        label: 'API',
        url: 'docs/api',
      },
      {
        label: 'FAQ',
        url: 'docs/faq',
      },
    ],
  },
  {
    label: 'EXAMPLES',
    url: 'examples',
    children: [
      {
        label: 'Basic',
        url: 'examples/basic',
      },
      {
        label: 'Advanced',
        url: 'examples/advanced',
      },
      {
        label: 'Dynamic',
        url: 'examples/dynamic',
      },
      {
        label: 'Testing',
        url: 'examples/testing',
      },
    ],
  },
  {
    label: 'CONTRIBUTE',
    url: 'contribute',
  },
  {
    label: 'CHANGELOG',
    url: 'changelog',
  },
];

@Component({
  selector: 'demo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, MatListModule],
})
export class NavigationComponent implements OnInit {
  navigation = NAVIGATION;

  ngOnInit() {}
}
