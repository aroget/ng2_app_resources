import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowledgeBaseTagComponent } from './tag';
import { KnowledgebaseListComponent } from './list';
import { KnowledgeBaseNewComponent } from './new';
import { KnowledgeBaseEditComponent } from './edit';
import { KnowledgeBaseDetailComponent } from './detail';

const knowledgebaseRoutes: Routes = [
  { path: 'knowledgebase', component: KnowledgebaseListComponent },
  { path: 'knowledgebase/new', component: KnowledgeBaseNewComponent },
  { path: 'knowledgebase/:id', component: KnowledgeBaseDetailComponent },
  { path: 'knowledgebase/:id/edit', component: KnowledgeBaseEditComponent },
  { path: 'knowledgebase/tag/:name', component: KnowledgeBaseTagComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(knowledgebaseRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class KnowledgeBaseRoutesModule { }

