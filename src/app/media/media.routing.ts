import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MediaNewComponent } from './new';
import { MediaListComponent } from './list';

const mediaRoutes: Routes = [
  { path: 'media', component: MediaListComponent },
  { path: 'media/new', component: MediaNewComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(mediaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MediaRoutesModule { }

