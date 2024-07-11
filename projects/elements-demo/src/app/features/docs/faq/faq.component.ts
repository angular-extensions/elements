import { Component, OnInit } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'demo-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true,
  imports: [MatExpansionModule],
})
export class FaqComponent implements OnInit {
  faq = FAQ;

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
      `,
  },
  {
    question:
      'What will happen if I use same element multiple times in single template?',
    answer:
      'The element bundle will be downloaded only once! The library takes care of this situation by maintaining registry of downloaded / downloading elements and every new occurence will be checked against that  registry...',
  },
  {
    question:
      'When do we need to use <code>*axLazyElement="module: true"</code> flag?',
    answer:
      'Some web components libraries might be distributed using ES modules, for example if we look at <a href="https://unpkg.com/@material/mwc-button@0.27.0/mwc-button.js?module" target="_blank">@material/mwc-button</a> we will see that it imports additional things like <code>@material/mwc-base</code> using import statement in its implementation. This means it will need to download multiple files compared to a single bundle when using Angular elements. To make this work, library has to generate <code>\t&#60;script type="module"></code> instead of just plain <code>\t&#60;script></code> tag.',
  },
  {
    question: 'Angular elements / web components / custom elements / what?',
    answer:
      'In the docs, we often use phrase "Angular elements (or any other web component)" but this may sound a bit vague without previous insight into the topic... <br><br>' +
      'The web standard is in fact called "Web Components" and it uses <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank">Custom Elements API</a> to create and use web components which are <strong>new custom, reusable, encapsulated HTML tags</strong> to use in web pages and web apps.<br><br>' +
      "Angular Elements wraps Angular components using <code>HTMLElement</code> APIs and then uses Custom Elements API, more precisely the <code>customElements.define('some-element', SomeComponentElement)</code> syntax to register it for the use in the web page.",
  },
  {
    question:
      'How to prevent multiple downloads of same elements bundle when used in the multiple apps / elements?',
    answer: `
    It is possible to override the <code>LAZY_ELEMENTS_REGISTRY</code> token and provide your own implementation of the registry which should implement <code>LazyElementsRegistry</code> interface. Such an overridden registry then could store the value globally (for example on the <code>window</code>). That way every instance of lazy elements library can work with this shared state and prevent multiple downloads of some element bundle in case it was already loaded by other library instance before.
    `,
  },
  {
    question: 'Does the application not detect changes of web component?',
    answer: `
    One of the reasons that may be causing the problem is that the web component's server may
    be telling the browser to cache the result within the <strong>cache-control</strong> header.<br>
    To further illustrate this situation, let's assume you're loading a web component and this is
    happening:<br><br>
    <ol>
    <li>
      When the user accesses the page for the first time, Angular Elements send a request to your
      web component and get the result to load the component on the screen.
    </li>
    <li>
      Let's assume the response of this previous request returned with the header <strong>Cache-Control:
      max-age=3600</strong>. This means that the browser can store the response for up to 3600 seconds (1 hour).
    </li>
    <li>
      Now you have made changes in your web component and hope for Angular Elements to load this new version
      on your page.
    </li>
    <li>
      When the user refreshes the page, Angular Elements will try to make a new request to your web component.
      However, the browser will automatically return the last cached response
      we mentioned in step 2.
    </li>
    </ol>
    <br>
    The solution to this scenario, if you want to detect changes of your web component as soon as
    they occur, it's to inform in the <strong>Cache-Control header: no-cache</strong>.<br><br>

    <em>Useful links:</em>
    <br>
    <em><a href="https://github.com/angular-extensions/elements/issues/148" target="_blank">Issue 148</a></em><br>
    <em><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control" target="_blank">Cache-Control</a></em>
    `,
  },
];
