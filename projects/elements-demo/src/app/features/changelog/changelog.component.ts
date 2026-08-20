import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'demo-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  imports: [MarkdownModule],
})
export class ChangelogComponent {
  private readonly http = inject(HttpClient);

  readonly changelog = toSignal(
    this.http.get('assets/CHANGELOG.md', {
      responseType: 'text',
    }),
    { initialValue: '' },
  );
}
