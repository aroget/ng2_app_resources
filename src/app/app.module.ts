import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { KnowledgeBaseModule } from './knowledgebase/knowledgebase.module';
import { KnowledgeBaseRoutesModule } from './knowledgebase/knowledgebase.routing';

import { MediaModule } from './media/media.module';
import { MediaRoutesModule } from './media/media.routing';

import { routing } from './app.routing';
import { SharedModule } from './shared/shared.module';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    MediaModule,
    MediaRoutesModule,
    KnowledgeBaseModule,
    KnowledgeBaseRoutesModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
