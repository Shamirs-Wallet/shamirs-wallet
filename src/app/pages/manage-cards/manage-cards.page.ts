import { Component, OnInit, OnDestroy, NgZone, AfterViewInit } from '@angular/core';
import { NFC, Ndef, NdefEvent } from '@ionic-native/nfc/ngx';
import { ShamirService } from 'src/app/services/shamir.service';
import { ToastController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { fadeOver } from 'src/app/animations/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-manage-cards',
  templateUrl: './manage-cards.page.html',
  styleUrls: ['./manage-cards.page.scss'],
  animations: [
    fadeOver
  ]
})
export class ManageCardsPage implements AfterViewInit, OnDestroy {
  private NdefListenerSubscription: Subscription;
  private NFCisBusy: boolean;

  readMode = this.shamir.readMode;
  setReadonly = this.shamir.setReadonly;
  shardsCounter = 0;

  constructor(
    public shamir: ShamirService,
    public nfc: NFC,
    public ndef: Ndef,
    private toastController: ToastController,
    private navigation: NavController,
    private zone: NgZone,
    private translate: TranslateService
  ) {
    if (!this.shamir.readMode) {
      this.shamir.generateShards();
    }
  }

  ngAfterViewInit() {
    this.attachToNFC();
  }

  ngOnDestroy() {
    this.NdefListenerSubscription.unsubscribe();
  }

  async attachToNFC() {
    if (await this.nfcIsAvailable() === false) {
      return;
    }

    this.NdefListenerSubscription = this.nfc.addNdefListener()
      .subscribe(async (data: NdefEvent) => {
        if (this.NFCisBusy || this.shardsCounter >= this.shamir.shares) {
          return;
        }

        this.NFCisBusy = true;

        if (this.readMode) {
          this.readTag(data);
        } else {
          await this.writeTag();
        }

        this.NFCisBusy = false;
      }, async err => {
        console.error(err);
        await this.nfcAttachmentFailed();
      });
  }

  async nfcIsAvailable() {
    try {
      const nfcEnabled = await this.nfc.enabled();
      if (nfcEnabled === false) {
        await this.nfcAttachmentFailed();
        return false;
      }
    } catch (error) {
      console.error(error);
      await this.nfcAttachmentFailed();
      return false;
    }

    return true;
  }

  async nfcAttachmentFailed() {
    const toast = await this.toastController.create({
      message: await this.translate.get('pages.manage-cards.toasts.nfcNotAvailable').toPromise(),
      duration: -1,
      buttons: [
        {
          text: await this.translate.get('pages.manage-cards.toasts.tryAgainButton').toPromise(),
          role: 'cancel',
          icon: 'refresh-outline',
          handler: () => {
            this.attachToNFC();
          }
        }
      ]
    });
    await toast.present();
  }

  readTag(data: NdefEvent) {
    this.zone.run(() => this.shardsCounter++);

    const payload = data.tag.ndefMessage[0].payload;
    const tagContent = this.nfc.bytesToString(payload).substring(3);

    this.shamir.addShard(Buffer.from(tagContent, 'base64'));

    if (this.shardsCounter === this.shamir.threshold) {
      this.navigation.navigateForward(['/finish']);
    }
  }

  async writeTag() {
    const shard = this.shamir.getShards()[this.shardsCounter];
    const base64encoded = shard.toString('base64');
    const record = this.ndef.textRecord(base64encoded);

    try {
      await this.nfc.write([record]);

      if (this.setReadonly) {
        await this.nfc.makeReadOnly();
      }

      this.zone.run(() => this.shardsCounter++);

      if (this.shardsCounter === this.shamir.getShards().length) {
        this.navigation.navigateForward(['/finish']);
      }
    } catch (error) {
      console.error(error);

      const message = await this.translate.get('pages.manage-cards.toasts.tryAgain').toPromise();
      const toast = await this.toastController.create({
        message,
        duration: 3000
      });
      await toast.present();
    }
  }
}
