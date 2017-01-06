import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qa-nav-bar',
  template: require('./nav-bar.html'),
  styles: [require('./nav-bar.scss')]
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
