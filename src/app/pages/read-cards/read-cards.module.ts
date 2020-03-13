import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadCardsPageRoutingModule } from './read-cards-routing.module';

import { ReadCardsPage } from './read-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadCardsPageRoutingModule
  ],
  declarations: [ReadCardsPage]
})
export class ReadCardsPageModule {}
