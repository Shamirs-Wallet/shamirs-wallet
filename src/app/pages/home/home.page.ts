import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController, AlertController } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  internetConnected: Subscription;

  alertInternetConnection: HTMLIonAlertElement;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService,
    private network: Network,
    public alertController: AlertController,
    private translate: TranslateService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.watchInternetConnection();
  }

  async ionViewDidEnter() {
    this.shamir.initialize();

    if (this.network.type !== 'none') {
      this.showAlertInternetConnectionFound();
    }
  }

  ngOnDestroy(): void {
    if (this.alertInternetConnection !== undefined) {
      this.internetConnected.unsubscribe();
    }
  }

  start(readMode: boolean) {
    this.shamir.readMode = readMode;

    if (readMode) {
      this.navigation.navigateForward(['/combination']);
    } else {
      this.navigation.navigateForward(['/select-word-length']);
    }
  }

  watchInternetConnection() {
    // watch network for a disconnection
    this.internetConnected = this.network.onDisconnect().subscribe(async () => {
      if (this.alertInternetConnection !== undefined) {
        await this.alertInternetConnection.dismiss();
      }
    });

    // watch network for a connection
    this.internetConnected = this.network.onConnect().subscribe(async () => {
      setTimeout(async () => await this.showAlertInternetConnectionFound(), 2000);
    });
  }

  async showAlertInternetConnectionFound() {
    this.alertInternetConnection = await this.alertController.create({
      header: await this.translate.get('pages.home.connection.title').toPromise(),
      subHeader: await this.translate.get('pages.home.connection.subtitle').toPromise(),
      message: await this.translate.get('pages.home.connection.message').toPromise(),
      buttons: []
    });

    await this.alertInternetConnection.present();
    await this.alertInternetConnection.onDidDismiss();

    if (this.network.type !== 'none') {
      this.showAlertInternetConnectionFound();
    }
  }
}
