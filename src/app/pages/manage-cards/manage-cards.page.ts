import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.page.html',
  styleUrls: ['./manage-cards.page.scss'],
})
export class ManageCardsPage implements OnInit {
  readMode: boolean;

  constructor() { }

  ngOnInit() {
  }
}
