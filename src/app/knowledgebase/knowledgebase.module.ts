import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { KnowledgeBaseTagComponent } from './tag';
import { KnowledgebaseListComponent } from './list';
import { KnowledgeBaseNewComponent } from './new';
import { KnowledgeBaseEditComponent } from './edit';
import { KnowledgeBaseDetailComponent } from './detail';

import { KnowledgebaseService } from './knowledgebase.service';

import {
  KnowledgeBaseItemComponent,
  KnowledgebaseSubNavComponent
} from './components';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    KnowledgeBaseTagComponent,
    KnowledgeBaseNewComponent,
    KnowledgeBaseEditComponent,
    KnowledgeBaseItemComponent,
    KnowledgebaseListComponent,
    KnowledgebaseSubNavComponent,
    KnowledgeBaseDetailComponent
  ],
  providers: [
    KnowledgebaseService
  ],
  exports: []
})
export class KnowledgeBaseModule { }

