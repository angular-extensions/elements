import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  columnCount: Observable<number>;

  features = FEATURES;
  codeExampleComponent = CODE_EXAMPLE_COMPONENT;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount;
  }
}

const CODE_EXAMPLE_COMPONENT = `@Component({
  selector: 'your-org-feature',
  template: '<some-element *axLazyElement="elementUrl"></some-element>'
})
export class FeatureComponent {
  elementUrl = 'https://your-org.com/elements/some-element.js';
}
`;

const FEATURES = [
  {
    title: 'Lightweight',
    subtitle:
      'The library is extremely lightweight, all in all it is less than 5kb (or 1.5kb gzipped), epic!',
    icon: 'cloud_queue'
  },
  {
    title: 'Simple API',
    subtitle:
      'Just grab <code>*axLazyElement</code> directive set the element bundle url and you are ready to go!',
    icon: 'sentiment_satisfied_alt'
  },
  {
    title: 'Loading indicator support',
    subtitle:
      'Define optional custom loading indicator to be displayed before the element is ready...',
    icon: 'hourglass_empty'
  },
  {
    title: 'Lazy loading',
    subtitle:
      'This is as lazy as it gets! The request to load a bundle will be triggered only when the element appears in the template of some component!',
    icon: 'schedule'
  },
  {
    title: 'Angular template binding',
    subtitle:
      'Use standard Angular template binding for both properties and events as you would for any other Angular component!',
    icon: 'view_compact'
  },
  {
    title: 'Performance',
    subtitle:
      'Elements are loaded just once, even if you use it on multiple pages or even multiple time on single page!',
    icon: 'offline_bolt'
  },
  {
    title: 'Supports everything',
    subtitle:
      'Angular elements, web components, basically any custom element you can get your hands on...',
    icon: 'category'
  }
];
