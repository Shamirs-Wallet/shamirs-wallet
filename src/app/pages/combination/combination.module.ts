import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CombinationPageRoutingModule } from './combination-routing.module';

import { CombinationPage } from './combination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CombinationPageRoutingModule
  ],
  declarations: [CombinationPage]
})
export class CombinationPageModule {}
