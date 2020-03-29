import { Component, OnInit, OnDestroy } from '@angular/core';
import { NFC, Ndef, NdefEvent } from '@ionic-native/nfc/ngx';
import { ShamirService } from 'src/app/services/shamir.service';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.page.html',
  styleUrls: ['./manage-cards.page.scss'],
})
export class ManageCardsPage implements OnInit, OnDestroy {
  NdefListenerSubscription: Subscription;
  readMode = this.shamir.readMode;
  shardWroteCounter = 0;

  private isWriting: boolean;

  constructor(
    private shamir: ShamirService,
    public nfc: NFC,
    public ndef: Ndef,
    private toastController: ToastController
  ) {
    this.shamir.generateShards();
  }

  ngOnInit() {
    this.attachToNFC();
  }

  ngOnDestroy() {
    this.NdefListenerSubscription.unsubscribe();
  }

  async attachToNFC() {
    if (await this.nfc.enabled() === false) {
      const toast = await this.toastController.create({
        message: 'Auf dein NFC-Modul konnte nicht zugegriffen werden. Ist es aktiviert?',
        duration: Infinity,
        buttons: [
          {
            text: 'Nochmal versuchen',
            role: 'cancel',
            icon: 'refresh-outline',
            handler: () => {
              this.attachToNFC();
            }
          }
        ]
      });
      toast.present();
    }

    this.NdefListenerSubscription = this.nfc.addNdefListener()
      .subscribe((data: NdefEvent) => {
        if (this.readMode) {
          this.readTag(data);
        } else {
          this.writeTag();
        }
      }, err => {
        console.error(err);
      });
  }

  writeTag() {
    if (!this.isWriting && this.shardWroteCounter <= this.shamir.threshold) {
      console.log('this.shardWroteCounter ' + this.shardWroteCounter);

      this.isWriting = true;
      this.nfc.write([this.shamir.shards[this.shardWroteCounter]])
        .then(() => {
          this.isWriting = false;
          console.log('written');
          this.shardWroteCounter++;
        })
        .catch(err => {
          console.error(err);
          this.isWriting = false;
        });
    }
  }

  readTag(data: NdefEvent) {
    const payload = data.tag.ndefMessage[0].payload;
    // const tagContent = this.nfc.bytesToString(payload).substring(3);
    // this.readingTag = false;
    console.log('payload', payload);
  }
}
