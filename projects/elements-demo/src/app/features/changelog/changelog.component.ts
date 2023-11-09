import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'demo-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  standalone: true,
  imports: [AsyncPipe, MarkdownModule],
})
export class ChangelogComponent {
  private http = inject(HttpClient);

  changelog = this.http.get<string>('assets/CHANGELOG.md', {
    responseType: 'text' as any,
  });
}
