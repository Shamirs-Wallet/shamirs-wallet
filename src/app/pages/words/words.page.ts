import { Component, OnInit, } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController } from '@ionic/angular';

export class Word {
  index: number;
  value: string;
}

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage implements OnInit {
  words: Word[] = [];

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) {
  }

  ngOnInit() {
    for (let index = 0; index < this.shamir.wordCount; index++) {
      this.words.push({ index, value: '' });
      // this.words.push('TEST'); // ! TEST ONLY
    }
  }

  save() {
    for (const word of this.words) {
      if (word === undefined || word.value === undefined || word.value.length < 4) {
        return;
      }
    }

    let words = this.words;
    words = words.map(f => ({ index: f.index, value: f.value.trim() })); // trim whitespaces
    this.shamir.words = words.map(f => f.value);

    this.navigation.navigateForward(['/manage-cards']);
  }
}
