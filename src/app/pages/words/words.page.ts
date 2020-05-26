import { Component, OnInit, } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage implements OnInit {
  words = new Array<string>();

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { 
  }

  ngOnInit() {
    for (let index = 0; index < this.shamir.wordCount; index++) {
      this.words.push('');
      // this.words.push('TEST'); // ! TEST ONLY
    }
  }

  save() {
    for (const word of this.words) {
      if (word === undefined || word.length < 4) {
        return;
      }
    }

    let words = this.words;
    words = words.map(f => f.trim()); // trim whitespaces
    this.shamir.words = words;

    this.navigation.navigateForward(['/manage-cards']);
  }
}
