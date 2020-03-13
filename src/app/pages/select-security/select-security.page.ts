import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-security',
  templateUrl: './select-security.page.html',
  styleUrls: ['./select-security.page.scss'],
})
export class SelectSecurityPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getWordsRouterLink() {
    return ['/words', 0, 24, 35]; // TODO Read oder Write?; Wörterlänge holen; Sicherheitskombination holen
  }
}
