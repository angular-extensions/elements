import { Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { ChangelogComponent } from './changelog.component';

export default <Routes>[
  {
    path: '',
    component: ChangelogComponent,
    providers: [importProvidersFrom(MarkdownModule.forRoot())],
  },
];
