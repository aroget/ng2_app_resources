import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'qa-role-select',
  template: require('./role-select.html'),
  styles: [require('./role-select.scss')]
})
export class RoleSelectComponent implements OnInit {
  @Input() selected: any;
  @Output() roleSelected: EventEmitter<number> = new EventEmitter();
  roles = [];

  constructor() { }

  onChange(event) {
    this.roleSelected.emit(event.target.value);
  }

  ngOnInit() {
    this.roles.push(
    {
      'id': 1,
      'name': 'employee',
      'uuid': '1f1a0219a38741e9983bc1303e65d725'
    },
    {
      'id': 2,
      'name': 'manager',
      'uuid': '846461c22d684952bc11eaf4253c1b52'
    },
    {
      'id': 3,
      'name': 'owner',
      'uuid': '081bdf6fc21a4b8db45e587a8520a12d'
    }
    );
  }

}
