import { Component, OnInit } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

@Component({
  selector: 'app-read-cards',
  templateUrl: './read-cards.page.html',
  styleUrls: ['./read-cards.page.scss'],
})
export class ReadCardsPage implements OnInit {

  constructor(
    private nfc: NFC,
    private ndef: Ndef
  ) {
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

      const message = this.ndef.textRecord('Hello world');
      this.nfc.share([message]).then(() => console.log('success')).catch(error => console.error(error));
    });
  }

  ngOnInit() {
  }

}
