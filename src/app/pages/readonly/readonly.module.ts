import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReadonlyPageRoutingModule } from './readonly-routing.module';
import { ReadonlyPage } from './readonly.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadonlyPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ReadonlyPage]
})
export class ReadonlyPageModule {}
