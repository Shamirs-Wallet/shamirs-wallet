import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectWordLengthPage } from './select-word-length.page';

const routes: Routes = [
  {
    path: '',
    component: SelectWordLengthPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SelectWordLengthPageRoutingModule { }
