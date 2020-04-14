import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {
  password = this.shamir.getSuperPasswort();

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  ngOnInit() {
  }

  backToHome() {
    this.navigation.navigateRoot(['/home']); // Navigate Back to Home
  }

}
