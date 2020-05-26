import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ShamirService } from 'src/app/services/shamir.service';
import { fadeIn } from 'src/app/animations/animations';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
  animations: [
    fadeIn
  ]
})
export class FinishPage {
  password = this.shamir.getSuperPasswort();

  constructor(
    private navigation: NavController,
    public shamir: ShamirService
  ) { }

  backToHome() {
    this.navigation.navigateRoot(['/home']); // Navigate Back to Home
  }
}
