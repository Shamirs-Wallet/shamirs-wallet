import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteCardsPageRoutingModule } from './write-cards-routing.module';

import { WriteCardsPage } from './write-cards.page';

import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteCardsPageRoutingModule
  ],
  providers: [
    NFC,
    Ndef
  ],
  declarations: [WriteCardsPage]
})
export class WriteCardsPageModule {}
