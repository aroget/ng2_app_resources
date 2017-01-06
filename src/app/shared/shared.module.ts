import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  SlugifyPipe,
  TruncatePipe,
  SanitizePipe
} from './pipes';

import {
  NavBarComponent,
  CkeditorComponent,
  RoleSelectComponent,
  PaginationComponent
} from './components';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    SlugifyPipe,
    TruncatePipe,
    SanitizePipe,
    NavBarComponent,
    CkeditorComponent,
    PaginationComponent,
    RoleSelectComponent
  ],
  exports: [
    SlugifyPipe,
    TruncatePipe,
    SanitizePipe,
    NavBarComponent,
    CkeditorComponent,
    PaginationComponent,
    RoleSelectComponent
  ]
})
export class SharedModule { }
