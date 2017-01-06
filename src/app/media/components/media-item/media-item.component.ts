import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

declare var document: any;

@Component({
  selector: 'qa-media-item',
  template: require('./media-item.html'),
  styles: [require('./media-item.scss')]
})
export class MediaItemComponent implements OnInit {
  @ViewChild('source') source: ElementRef;
  @Input() media: string;

  constructor() { }

  copyUrl() {
    this.source.nativeElement.select();
    document.execCommand('copy');
  }

  ngOnInit() {}

}
