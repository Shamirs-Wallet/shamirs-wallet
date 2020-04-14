import { Component, OnInit, OnDestroy } from '@angular/core';
import { NFC, Ndef, NdefEvent } from '@ionic-native/nfc/ngx';
import { ShamirService } from 'src/app/services/shamir.service';
import { ToastController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.page.html',
  styleUrls: ['./manage-cards.page.scss'],
})
export class ManageCardsPage implements OnInit, OnDestroy {
  private NdefListenerSubscription: Subscription;
  private NFCisWriting: boolean;

  readMode = this.shamir.readMode;
  shardsWroteCounter = 0;

  constructor(
    private shamir: ShamirService,
    public nfc: NFC,
    public ndef: Ndef,
    private toastController: ToastController,
    private navigation: NavController,
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
    if (!this.NFCisWriting && this.shardsWroteCounter <= this.shamir.threshold) {
      console.log('this.shardWroteCounter ' + this.shardsWroteCounter);

      this.NFCisWriting = true;

      const record = this.ndef.textRecord(this.shamir.shards[this.shardsWroteCounter]);

      this.nfc.write([record])
        .then(() => {
          this.NFCisWriting = false;

          if (this.shardsWroteCounter === this.shamir.shards.length) {
            this.navigation.navigateForward(['/finish']);
          }

          this.shardsWroteCounter++;
        })
        .catch(err => {
          console.error(err);
          this.NFCisWriting = false;
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
