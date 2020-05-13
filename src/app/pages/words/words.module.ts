import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WordsPageRoutingModule } from './words-routing.module';
import { WordsPage } from './words.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WordsPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [WordsPage]
})
export class WordsPageModule {}
