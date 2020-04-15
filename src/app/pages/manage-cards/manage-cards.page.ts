import { Component, OnInit, OnDestroy } from '@angular/core';
import { NFC, Ndef, NdefEvent } from '@ionic-native/nfc/ngx';
import { ShamirService } from 'src/app/services/shamir.service';
import { ToastController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.page.html',
  styleUrls: ['./manage-cards.page.scss'],
})
export class ManageCardsPage implements OnInit, OnDestroy {
  private NdefListenerSubscription: Subscription;
  private NFCisBusy: boolean;

  readMode = this.shamir.readMode;
  shardsCounter = 0;

  constructor(
    private shamir: ShamirService,
    public nfc: NFC,
    public ndef: Ndef,
    private toastController: ToastController,
    private navigation: NavController
  ) {
    if (!this.shamir.readMode) {
      this.shamir.generateShards();
    }
  }

  ngOnInit() {
    this.attachToNFC();
  }

  ngOnDestroy() {
    this.NdefListenerSubscription.unsubscribe();
  }

  attachToNFC() {
    this.NdefListenerSubscription = this.nfc.addNdefListener()
      .subscribe(async (data: NdefEvent) => {
        if (this.readMode) {
          this.readTag(data);
        } else {
          await this.writeTag();
        }
      }, async err => {
        console.error(err);

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
        await toast.present();
      });
  }

  readTag(data: NdefEvent) {
    if (this.NFCisBusy || this.shardsCounter >= this.shamir.threshold) {
      return;
    }

    this.NFCisBusy = true;
    this.shardsCounter++;

    const payload = data.tag.ndefMessage[0].payload;
    const tagContent = this.nfc.bytesToString(payload).substring(3);

    this.shamir.addShard(Buffer.from(tagContent, 'base64'));

    this.NFCisBusy = false;

    if (this.shardsCounter === this.shamir.threshold) {
      this.navigation.navigateForward(['/finish']);
    }
  }

  async writeTag() {
    if (this.NFCisBusy || this.shardsCounter >= this.shamir.shares) {
      return;
    }

    this.NFCisBusy = true;

    const shard = this.shamir.getShards()[this.shardsCounter];
    const base64encoded = shard.toString('base64');
    const record = this.ndef.textRecord(base64encoded);

    try {
      await this.nfc.write([record]);
      await this.nfc.makeReadOnly();

      this.shardsCounter++;

      if (this.shardsCounter === this.shamir.getShards().length) {
        this.navigation.navigateForward(['/finish']);
      }
    } catch (error) {
      console.error(error);

      const toast = await this.toastController.create({
        message: 'Versuch es noch einmal',
        duration: 3000
      });
      await toast.present();
    }

    this.NFCisBusy = false;
  }
}
