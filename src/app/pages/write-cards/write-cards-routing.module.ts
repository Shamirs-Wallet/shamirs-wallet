import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WriteCardsPage } from './write-cards.page';

const routes: Routes = [
  {
    path: '',
    component: WriteCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WriteCardsPageRoutingModule {}
