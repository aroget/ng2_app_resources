import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qa-knowledgebase-item',
  template: require('./knowledgebase-item.html'),
  styles: [require('./knowledgebase-item.scss')]
})
export class KnowledgeBaseItemComponent implements OnInit {
  @Input() knowledgebase: any;

  constructor() { }

  ngOnInit() { }

}
