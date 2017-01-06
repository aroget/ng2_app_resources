import { Component, OnInit } from '@angular/core';

import { KnowledgebaseService } from '../knowledgebase.service';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'qa-knowledgebase-new',
  template: require('./knowledgebase-new.html'),
  styles: [require('./knowledgebase-new.scss')]
})
export class KnowledgeBaseNewComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: KnowledgebaseService
  ) {
    this.form = fb.group({
      'question': ['', Validators.required],
      'description': ['', Validators.required],
      'role': ['', Validators.required],
      'tags': ['']
    });
  }

  onRoleSelected(role) {
    this.form.controls['role'].setValue(role);
  }

  onInputChanged(data) {
    this.form.controls['description'].setValue(data);
  }

  onSubmit(data) {
    console.log(data);
    if (!this.form.valid) { return; }

    data.tags = data.tags ? data.tags.split(', ') : [];

    this
      .service
      .postQuestion(data)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  ngOnInit() { }

}
