import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FinishPageRoutingModule } from './finish-routing.module';
import { FinishPage } from './finish.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [FinishPage]
})
export class FinishPageModule {}
