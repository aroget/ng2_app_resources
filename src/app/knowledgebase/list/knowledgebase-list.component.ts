import { Component, OnInit } from '@angular/core';

import { URLSearchParams } from '@angular/http';
import { KnowledgebaseService } from '../knowledgebase.service';

@Component({
  selector: 'qa-knowledgebase-list',
  template: require('./knowledgebase-list.html'),
  styles: [require('./knowledgebase-list.scss')]
})
export class KnowledgebaseListComponent implements OnInit {
  isReady = false;
  knowledgebase;

  constructor(
    private service: KnowledgebaseService
  ) {
    this.fetchData();
  }

  private fetchData(search?: URLSearchParams) {
    this
      .service
      .getQuestions(search)
      .toPromise()
      .then(res => {
        this.isReady = true;
        this.knowledgebase = res;
      })
      .catch(err => console.error(err));
  }

  onNavigate(location) {
    const params = location.split('?')[1];
    const searchParams = params.split('&');
    const search = new URLSearchParams();

    for (let param of searchParams) {
      let key = param.split('=');
      search.append(key[0], key[1]);
    }

    this.fetchData(search);
  }

  ngOnInit() { }

}
