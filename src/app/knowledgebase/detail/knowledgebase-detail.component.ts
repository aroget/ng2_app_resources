import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { KnowledgebaseService } from '../knowledgebase.service';

@Component({
  selector: 'qa-knowledgebase-detail',
  template: require('./knowledgebase-detail.html'),
  styles: [require('./knowledgebase-detail.scss')]
})
export class KnowledgeBaseDetailComponent implements OnInit {
  data;
  roleName;
  id: string;
  isReady = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: KnowledgebaseService
  ) {
    this.id = this.route.snapshot.params['id'];

    const question$ = this.service.getQuestionById(this.id);

    question$
      .switchMap(res => {
        this.data = res;
        return this.service.getRole(res.role);
      })
      .toPromise()
      .then(
        res => {
          this.isReady = true;
          this.roleName = res;
        }
      )
      .catch(
        err => {
          if (err.status === 404) {
            this.router.navigate(['/knowledgebase']);
          }
        }
      );
  }

  ngOnInit() { }

}
