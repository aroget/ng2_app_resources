import { Component, OnInit } from '@angular/core';

import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { KnowledgebaseService } from '../knowledgebase.service';

@Component({
  selector: 'qa-knowledgebase-tag',
  template: require('./knowledgebase-tag.html'),
})
export class KnowledgeBaseTagComponent implements OnInit {
  tag: string;
  isReady = false;
  knowledgebase;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: KnowledgebaseService
  ) {
    this.tag = this.route.snapshot.params['name'];
    this.fetchData();
  }

  private fetchData(search?: URLSearchParams) {
    this
      .service
      .getQuestionByTag(this.tag, search)
      .toPromise()
      .then(res => {
        this.isReady = true;
        this.knowledgebase = res;
      })
      .catch(err => {
        console.error(err);
      });
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
