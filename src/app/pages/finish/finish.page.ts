import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage {
  password = this.shamir.getSuperPasswort();

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  backToHome() {
    this.navigation.navigateRoot(['/home']); // Navigate Back to Home
  }
}
