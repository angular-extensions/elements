import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faq = FAQ;

  constructor() {}

  ngOnInit() {}
}

const FAQ = [
  {
    question:
      'When does the <code>*axLazyElement</code> directive trigger download of the element bundle (or module)',
    answer:
      'The element loading will be postponed until it was rendered in the template of some component. This can happen in following cases... <br>' +
      `
       <ul>
        <li>Angular component uses element in its template</li>
        <li>
          Angular component uses element in its template conditionally
          (<code>*ngIf</code>, <code>*ngFor</code>, ...) and the condition was
          fulfilled
        </li>
        <li>
          User navigated to an Angular component which uses element in its template
          (can be both eagerly or lazily loaded routes)
        </li>
      </ul>
      `
  },
  {
    question:
      'What will happen if I use same element multiple times in single template?',
    answer:
      'The element bundle will be downloaded only once! The library takes care of this situation by maintaining registry of downloaded / downloading elements and every new occurence will be checked against that  registry...'
  },
  {
    question:
      'When do we need to use <code>*axLazyElement="module: true"</code> flag?',
    answer:
      'Some web components libraries might be distributed using ES modules, for example if we look at <a href="https://unpkg.com/@material/mwc-button@0.6.0/mwc-button.js?module" target="_blank">@material/mwc-button</a> we will see that it imports additional things like <code>@material/mwc-base</code> using import statement in its implementation. This means it will need to download multiple files compared to a single bundle when using Angular elements. To make this work, library has to generate <code>\t&#60;script type="module"></code> instead of just plain <code>\t&#60;script></code> tag.'
  }
];
