import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadonlyPage } from './readonly.page';

const routes: Routes = [
  {
    path: '',
    component: ReadonlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadonlyPageRoutingModule {}
