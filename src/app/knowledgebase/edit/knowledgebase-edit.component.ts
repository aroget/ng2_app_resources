import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { KnowledgebaseService } from '../knowledgebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'qa-knowledgebase-edit',
  template: require('./knowledgebase-edit.html'),
  styles: [require('./knowledgebase-edit.scss')]
})
export class KnowledgeBaseEditComponent implements OnInit {
  id: string;
  isReady = false;
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: KnowledgebaseService
  ) {
    this.id = this.route.snapshot.params['id'];
    this
      .service
      .getQuestionById(this.id)
      .toPromise()
      .then(res => this.buildForm(res))
      .catch(err => {
        if (err.status === 404) {
          this.router.navigate(['/knowledgebase']);
        }
      });
  }

  private buildForm(data) {
    this.form = this.fb.group({
      'question': [data.question, Validators.required],
      'description': [data.description, Validators.required],
      'role': [data.role, Validators.required],
      'tags': [data.tags.join(', ')]
    });

    this.isReady = true;
  }

  onRoleSelected(role) {
    this.form.controls['role'].setValue(role);
  }

  onSubmit(data) {
    if (!this.form.valid) {
      console.error('Form is Invalid');
      return;
    }

    data.tags = data.tags ? data.tags.split(', ') : [];

    this
      .service
      .updateQuestion(parseInt(this.id, 10), data)
      .subscribe(
        res => console.log(res),
        err => console.error(err)
      );
  }

  onInputChanged(data) {
    this.form.controls['description'].setValue(data);
  }

  onDelete() {
    this
      .service
      .deleteQuestion(parseInt(this.id, 10))
      .subscribe(
        res => this.router.navigate(['/knowledgebase']),
        err => console.error(err)
      );
  }

  ngOnInit() {}

}
