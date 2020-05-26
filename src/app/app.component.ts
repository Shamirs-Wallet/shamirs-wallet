import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#3B386F');
      this.translate.setDefaultLang('en');

      if ((window as any).Intl && typeof (window as any).Intl === 'object') {
        console.log('API available');
        console.log(navigator.language);
        this.translate.use(navigator.language.slice(0, 2));
      }
    });
  }
}
