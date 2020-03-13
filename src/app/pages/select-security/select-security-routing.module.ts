import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectSecurityPage } from './select-security.page';

const routes: Routes = [
  {
    path: '',
    component: SelectSecurityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSecurityPageRoutingModule {}
