import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageCardsPage } from './manage-cards.page';

const routes: Routes = [
  {
    path: '',
    component: ManageCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageCardsPageRoutingModule {}
