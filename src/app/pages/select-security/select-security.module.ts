import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectSecurityPageRoutingModule } from './select-security-routing.module';

import { SelectSecurityPage } from './select-security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectSecurityPageRoutingModule
  ],
  declarations: [SelectSecurityPage]
})
export class SelectSecurityPageModule {}
