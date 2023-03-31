import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import changelog from 'raw-loader!../../../../../../CHANGELOG.md';

@Component({
  selector: 'demo-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  standalone: true,
  imports: [MarkdownModule],
})
export class ChangelogComponent {
  changelog = changelog;
}
