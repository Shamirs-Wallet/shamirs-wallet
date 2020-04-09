import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-select-security',
  templateUrl: './select-security.page.html',
  styleUrls: ['./select-security.page.scss'],
})
export class SelectSecurityPage {
  routeSubscription: Subscription;
  readMode: boolean;
  wordLength: number;
  combination: number;
  pin: number;

  constructor(
    private router: Router,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.pin === undefined || this.combination === undefined) {
      return;
    }

    if (this.combination === 35) {
      this.shamir.shares = 5;
      this.shamir.threshold = 3;
    } else if (this.combination === 105) {
      this.shamir.shares = 10;
      this.shamir.threshold = 5;
    }

    this.shamir.pin = this.pin;

    this.router.navigate(['/words']);
  }
}
