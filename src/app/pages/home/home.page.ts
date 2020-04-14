import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShamirService } from 'src/app/services/shamir.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) {}

  start(readMode: boolean) {
    this.shamir.readMode = readMode;
    this.navigation.navigateForward(['/select-word-length']);
  }
}
