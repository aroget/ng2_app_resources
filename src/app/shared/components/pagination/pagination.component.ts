import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qa-pagination',
  template: require('./pagination.html'),
  styles: [require('./pagination.scss')]
})
export class PaginationComponent implements OnInit {
  @Input() data: any;
  @Output() navigate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onNavigate(event, location: string) {
    event.preventDefault();

    if (location) {
      this.navigate.emit(location);
    }
  }

  ngOnInit() { }

}
