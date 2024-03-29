import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ManageCardsPageRoutingModule } from './manage-cards-routing.module';
import { ManageCardsPage } from './manage-cards.page';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageCardsPageRoutingModule,
    TranslateModule.forChild()
  ],
  providers: [
    NFC,
    Ndef
  ],
  declarations: [ManageCardsPage]
})
export class ManageCardsPageModule {}
