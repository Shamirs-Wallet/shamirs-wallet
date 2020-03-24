import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShamirService } from 'src/app/services/shamir.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    private shamir: ShamirService
  ) {}

  start(readMode: boolean) {
    this.shamir.readMode = readMode;
    this.router.navigate(['/select-word-length']);
  }
}
