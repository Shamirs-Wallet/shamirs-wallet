import { Component } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.page.html',
  styleUrls: ['./combination.page.scss'],
})
export class CombinationPage {
  combination: string;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.combination === undefined) {
      return;
    }

    if (this.combination === '35') {
      this.shamir.threshold = 3;
      this.shamir.shares = 5;
    } else if (this.combination === '510') {
      this.shamir.threshold = 5;
      this.shamir.shares = 10;
    }

    if (this.shamir.readMode) {
      this.navigation.navigateForward(['/manage-cards']);
    } else {
      this.navigation.navigateForward(['/words']);
    }
  }
}
