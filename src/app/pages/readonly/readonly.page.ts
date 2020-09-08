import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-readonly',
  templateUrl: './readonly.page.html',
  styleUrls: ['./readonly.page.scss'],
})
export class ReadonlyPage {
  setReadonly = false;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  save() {
    this.shamir.setReadonly = this.setReadonly;
    this.navigation.navigateForward(['/manage-cards']);
  }
}
