import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CombinationPage } from './combination.page';

const routes: Routes = [
  {
    path: '',
    component: CombinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationPageRoutingModule {}
