import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.page.html',
  styleUrls: ['./words.page.scss'],
})
export class WordsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getWriteCardsRouterLink() {
    return ['/write-cards', 0, 24, 35]; // TODO Read oder Write?; Wörterlänge holen; Wie übertrag ich die Wörter zum Schreiben?
  }
}
