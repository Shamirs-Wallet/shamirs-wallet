import { Component } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-security',
  templateUrl: './select-security.page.html',
  styleUrls: ['./select-security.page.scss'],
})
export class SelectSecurityPage {
  readMode: boolean;
  wordLength: number;
  combination: string;
  pin: number;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.pin === undefined) {
      return;
    }

    this.shamir.pin = this.pin;

    if (this.shamir.readMode) {
      this.navigation.navigateForward(['/manage-cards']);
    } else {
      this.navigation.navigateForward(['/combination']);
    }
  }
}
