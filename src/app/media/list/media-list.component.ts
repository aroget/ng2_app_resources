import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { MediaService } from '../media.service';

@Component({
  selector: 'qa-media-list',
  template: require('./media-list.html'),
  styles: [require('./media-list.scss')]
})
export class MediaListComponent implements OnInit {
  images$: Observable<any>;
  constructor(
    private service: MediaService
  ) {
    this.images$ = this.service.getMedia();
  }

  ngOnInit() { }

}
