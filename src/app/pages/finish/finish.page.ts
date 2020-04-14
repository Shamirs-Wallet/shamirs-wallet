import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {

  constructor(
    private navigation: NavController,
  ) { }

  ngOnInit() {
  }

  backToHome() {
    this.navigation.navigateRoot(['/home']); // Navigate Back to Home
  }

}
