import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-select-word-length',
  templateUrl: './select-word-length.page.html',
  styleUrls: ['./select-word-length.page.scss'],
})
export class SelectWordLengthPage {
  routeSubscription: Subscription;
  wordLength = 24;

  constructor(
    private router: Router,
    private shamir: ShamirService
  ) { }

  save() {
    if (this.wordLength === undefined) {
      return;
    }

    this.shamir.wordCount = this.wordLength;

    this.router.navigate(['/select-security']);
  }
}
