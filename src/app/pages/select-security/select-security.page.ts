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
  combination: string;
  pin: number;

  constructor(
    private router: Router,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.pin === undefined || this.combination === undefined) {
      return;
    }

    console.log('combination', this.combination);

    if (this.combination === '35') {
      this.shamir.threshold = 3;
      this.shamir.shares = 5;
    } else if (this.combination === '510') {
      this.shamir.threshold = 5;
      this.shamir.shares = 10;
    }

    this.shamir.pin = this.pin;

    this.router.navigate(['/words']);
  }
}
