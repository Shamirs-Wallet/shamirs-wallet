import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit, OnDestroy {
  internetConnected: Subscription;

  alertInternetConnection: HTMLIonAlertElement;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService,
    // private network: Network,
    public alertController: AlertController,
    // private translate: TranslateService
  ) { }

  async ngAfterViewInit(): Promise<void> {
    // await this.watchInternetConnection();
  }

  async ionViewDidEnter() {
    this.shamir.initialize();
  }

  ngOnDestroy(): void {
    if (this.alertInternetConnection !== undefined) {
      this.internetConnected.unsubscribe();
    }
  }

  start(readMode: boolean) {
    // if (this.network.type !== 'none') {
    //   this.showAlertInternetConnectionFound();
    //   return;
    // }

    this.shamir.readMode = readMode;
    this.navigation.navigateForward(['/information']);
  }

  // watchInternetConnection() {
  //   // watch network for a disconnection
  //   this.internetConnected = this.network.onDisconnect().subscribe(async () => {
  //     if (this.alertInternetConnection !== undefined) {
  //       await this.alertInternetConnection.dismiss();
  //     }
  //   });

  //   // watch network for a connection
  //   this.internetConnected = this.network.onConnect().subscribe(async () => {
  //     setTimeout(async () => await this.showAlertInternetConnectionFound(), 2000);
  //   });
  // }

  // async showAlertInternetConnectionFound() {
  //   if (this.alertInternetConnection !== undefined) {
  //     this.alertInternetConnection.dismiss();
  //     this.alertInternetConnection = undefined;
  //   }

  //   this.alertInternetConnection = await this.alertController.create({
  //     header: await this.translate.get('pages.home.connection.title').toPromise(),
  //     subHeader: await this.translate.get('pages.home.connection.subtitle').toPromise(),
  //     message: await this.translate.get('pages.home.connection.message').toPromise(),
  //     buttons: []
  //   });

  //   await this.alertInternetConnection.present();
  //   await this.alertInternetConnection.onDidDismiss();

  //   if (this.network.type !== 'none') {
  //     this.showAlertInternetConnectionFound();
  //   }
  // }
}
