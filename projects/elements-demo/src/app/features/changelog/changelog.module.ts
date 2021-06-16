import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ChangelogRoutingModule } from './changelog-routing.module';
import { ChangelogComponent } from './changelog.component';

@NgModule({
  declarations: [ChangelogComponent],
  imports: [CommonModule, MarkdownModule.forRoot(), ChangelogRoutingModule],
})
export class ChangelogModule {}
