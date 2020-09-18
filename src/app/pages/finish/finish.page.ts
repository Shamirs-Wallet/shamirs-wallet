import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { ShamirService } from 'src/app/services/shamir.service';
import { fadeIn } from 'src/app/animations/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
  animations: [
    fadeIn
  ]
})
export class FinishPage implements OnInit {
  password = this.shamir.getSuperPasswort();

  constructor(
    private navigation: NavController,
    public shamir: ShamirService,
    private toastController: ToastController,
    private platform: Platform,
    private translate: TranslateService
  ) { }

  backToHome() {
    this.navigation.navigateRoot(['/home']); // Navigate Back to Home
  }

  ngOnInit(): void {
    setTimeout(() => this.openRateAppToast(), 4000);
  }

  async openRateAppToast() {
    const toast = await this.toastController.create({
      message: await this.translate.get('pages.finish.rating.message').toPromise(),
      color: 'primary',
      buttons: [
        {
          side: 'end',
          text: await this.translate.get('pages.finish.rating.rate-button').toPromise(),
          handler: () => {
            if (this.platform.is('ios')) {
              // TODO
            } else if (this.platform.is('android')) {
              window.open('https://play.google.com/store/apps/details?id=ms.shamirswallet.app');
            }
          }
        }, {
          text: 'X',
          role: 'cancel',
          handler: () => { }
        }
      ]
    });
    toast.present();
  }
}
