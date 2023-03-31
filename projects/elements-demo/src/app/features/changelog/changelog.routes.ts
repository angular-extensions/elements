import { Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ChangelogComponent } from './changelog.component';

export default [
  {
    path: '',
    component: ChangelogComponent,
    providers: [importProvidersFrom(MarkdownModule.forRoot())],
  },
] as Route[];
