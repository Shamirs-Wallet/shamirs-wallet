import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage {
  routeSubscription: Subscription;
  words: string[];

  constructor(
    private router: Router,
    private shamir: ShamirService
  ) {
    this.words = Array(this.shamir.wordCount).fill(this.makeid(6));
    console.log(this.words);
  }

  save() {
    for (const word of this.words) {
      if (word === undefined || word.length < 4) {
        return;
      }
    }

    this.shamir.words = this.words;

    this.router.navigate(['/manage-cards']);
  }

  // ! TEST ONLY
  makeid(length: number) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
