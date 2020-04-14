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
  private NFCisWriting: boolean;
  private NFCisReading: boolean;

  readMode = this.shamir.readMode;
  shardsCounter = 0;

  constructor(
    private shamir: ShamirService,
    public nfc: NFC,
    public ndef: Ndef,
    private toastController: ToastController,
    private navigation: NavController,
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
    console.log('this.shardsWroteCounter', this.shardsCounter);
    console.log('this.shamir.threshold', this.shamir.threshold);
    console.log('this.shamir.shares', this.shamir.shares);

    if (!this.NFCisWriting && this.shardsCounter < this.shamir.shares) {
      console.log('this.shardWroteCounter ' + this.shardsCounter);

      this.NFCisWriting = true;

      const shard = this.shamir.shards[this.shardsCounter];
      const base64encoded = shard.toString('base64');
      const record = this.ndef.textRecord(base64encoded);

      this.nfc.write([record])
        .then(() => {
          this.NFCisWriting = false;
          this.shardsCounter++;

          if (this.shardsCounter === this.shamir.shards.length) {
            this.navigation.navigateForward(['/finish']);
          }
        })
        .catch(err => {
          console.error(err);
          this.NFCisWriting = false;
        });
    }
  }

  readTag(data: NdefEvent) {
    if (!this.NFCisReading && this.shardsCounter < this.shamir.threshold) {
      this.NFCisReading = true;
      this.shardsCounter++;

      const payload = data.tag.ndefMessage[0].payload;
      const tagContent = this.nfc.bytesToString(payload).substring(3);

      this.shamir.addShard(Buffer.from(tagContent, 'base64'));

      this.NFCisReading = false;

      if (this.shardsCounter === this.shamir.threshold) {
        this.navigation.navigateForward(['/finish']);
      }
    }
  }
}
