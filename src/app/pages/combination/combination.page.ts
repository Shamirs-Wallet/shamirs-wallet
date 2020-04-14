import { Component, OnInit } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.page.html',
  styleUrls: ['./combination.page.scss'],
})
export class CombinationPage implements OnInit {
  combination: string;

  constructor(
    private navigation: NavController,
    private shamir: ShamirService
  ) { }

  ngOnInit() {
  }

  save() {
    if (this.combination === undefined) {
      return;
    }

    if (this.combination === '35') {
      this.shamir.threshold = 3;
      this.shamir.shares = 5;
    } else if (this.combination === '510') {
      this.shamir.threshold = 5;
      this.shamir.shares = 10;
    }

    if (this.shamir.readMode) {
      this.navigation.navigateForward(['/select-security']);
    } else {
      this.navigation.navigateForward(['/words']);
    }
  }
}
