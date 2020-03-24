import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ShamirService } from 'src/app/services/shamir.service';
import { Combination } from 'src/app/data/combination';

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

    this.shamir.combination = this.combination === 35 ? Combination.Normal : Combination.Extended;
    this.shamir.pin = this.pin;

    this.router.navigate(['/words']);
  }
}
