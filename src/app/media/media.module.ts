import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MediaNewComponent } from './new';
import { MediaListComponent } from './list';

import { MediaService } from './media.service';

import {
  MediaItemComponent,
  MediaSubNavComponent
} from './components';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MediaNewComponent,
    MediaItemComponent,
    MediaListComponent,
    MediaSubNavComponent
  ],
  providers: [
    MediaService
  ],
  exports: []
})
export class MediaModule { }

