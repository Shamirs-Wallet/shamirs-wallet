import { Component } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-select-word-length',
  templateUrl: './select-word-length.page.html',
  styleUrls: ['./select-word-length.page.scss'],
})
export class SelectWordLengthPage {
  wordLength = 24;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.wordLength === undefined) {
      return;
    }

    this.shamir.wordCount = this.wordLength;

    this.navigation.navigateForward(['/select-security']);
  }
}
