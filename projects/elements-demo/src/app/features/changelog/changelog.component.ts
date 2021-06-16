import { Component } from '@angular/core';

import changelog from 'raw-loader!../../../../../../CHANGELOG.md';

@Component({
  selector: 'demo-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent {
  changelog = changelog;
}
