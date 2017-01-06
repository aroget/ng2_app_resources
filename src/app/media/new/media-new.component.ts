import { Component, OnInit } from '@angular/core';

import { MediaService } from '../media.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'qa-media-new',
  template: require('./media-new.html'),
  styles: [require('./media-new.scss')]
})
export class MediaNewComponent implements OnInit {
  form: FormGroup;
  fileToUpload: File;

  constructor(
    private fb: FormBuilder,
    private service: MediaService
  ) {
    this.form = fb.group({
      'file': ['', Validators.required]
    });
  }

  onFileChange(data) {
    this.fileToUpload = data.target.files[0];
  }

  onSubmit(data) {
    if (!this.fileToUpload) { return; }

    // console.log(this.fileToUpload);

    this
      .service
      .uploadMedia(this.fileToUpload)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );

    // console.log(this.fileToUpload);
  }

  ngOnInit() {
    // this.form. valueChanges.subscribe(() => console.log('Here'));
  }

}
