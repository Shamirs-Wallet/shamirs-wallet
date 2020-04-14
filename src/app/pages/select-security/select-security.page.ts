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
    if (this.pin === undefined) {
      return;
    }

    this.shamir.pin = this.pin;

    this.router.navigate(['/combination']);
  }
}
