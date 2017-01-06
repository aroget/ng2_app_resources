import { Component } from '@angular/core';

import '../style/app.scss';

@Component({
  selector: 'qa-app',
  template: `
  <qa-nav-bar></qa-nav-bar>
  <div class="container-fluid">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {

  constructor() { }
}
