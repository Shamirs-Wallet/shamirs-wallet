import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectWordLengthPageRoutingModule } from './select-word-length-routing.module';

import { SelectWordLengthPage } from './select-word-length.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectWordLengthPageRoutingModule
  ],
  declarations: [SelectWordLengthPage]
})
export class SelectWordLengthPageModule {}
