import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage {
  accepted = false;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.accepted) {
      if (this.shamir.readMode) {
        this.navigation.navigateForward(['/combination']);
      } else {
        this.navigation.navigateForward(['/select-word-length']);
      }
    }
  }
}
