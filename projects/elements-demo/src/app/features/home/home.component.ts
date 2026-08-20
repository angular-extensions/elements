import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighlightModule } from 'ngx-highlightjs';

import { ResponsiveLayoutService } from '../../core/layout/responsive-layout.service';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    HighlightModule,
  ],
})
export class HomeComponent {
  private readonly responsiveLayoutService = inject(ResponsiveLayoutService);

  readonly columnCount = this.responsiveLayoutService.columnCount;
  readonly features = FEATURES;
  readonly codeExampleComponent = CODE_EXAMPLE_COMPONENT;
}

const CODE_EXAMPLE_COMPONENT = `@Component({
  selector: 'my-org-component',
  imports: [LazyElementDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <!-- will be lazy loaded and uses standard Angular template bindings -->
    <some-element
      *axLazyElement="elementUrl"
      [data]="data()"
      (dataChange)="handleChange($event)"
    >
    </some-element>
  \`
})
export class MyOrgComponent {
  readonly elementUrl = 'https://your-org.com/elements/some-element.js';

  readonly data = signal<SomeData>(initialData);

  handleChange(change: Partial<SomeData>) {
    this.data.update((data) => ({ ...data, ...change }));
  }
}
`;

const FEATURES = [
  {
    title: 'Lightweight',
    subtitle:
      'The library is extremely lightweight, all in all it is less than 5kb (or 1.5kb gzipped), epic!',
    icon: 'cloud_queue',
  },
  {
    title: 'Simple API',
    subtitle:
      'Just grab <code>*axLazyElement</code> directive set the element bundle url and you are ready to go!',
    icon: 'sentiment_satisfied_alt',
  },
  {
    title: 'Loading indicator support',
    subtitle:
      'Define optional custom loading indicator to be displayed before the element is ready...',
    icon: 'hourglass_empty',
  },
  {
    title: 'Lazy loading',
    subtitle:
      'This is as lazy as it gets! The request to load a bundle will be triggered only when the element appears in the template of some component!',
    icon: 'schedule',
  },
  {
    title: 'Angular template binding',
    subtitle:
      'Use standard Angular template binding for both properties and events as you would for any other Angular component!',
    icon: 'view_compact',
  },
  {
    title: 'Performance',
    subtitle:
      'Elements are loaded just once, even if you use it on multiple pages or even multiple time on single page!',
    icon: 'offline_bolt',
  },
  {
    title: 'Flexible',
    subtitle:
      'Support cutting edge web APIs and standards like ES Modules and Import Maps!',
    icon: 'code',
  },
  {
    title: 'Supports everything',
    subtitle:
      'Angular elements, web components, basically any custom element you can get your hands on...',
    icon: 'category',
  },
];
