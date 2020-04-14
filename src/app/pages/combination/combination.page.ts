import { Component, OnInit } from '@angular/core';
import { ShamirService } from 'src/app/services/shamir.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combination',
  templateUrl: './combination.page.html',
  styleUrls: ['./combination.page.scss'],
})
export class CombinationPage implements OnInit {
  combination: string;

  constructor(
    private shamir: ShamirService,
    private router: Router
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

    this.router.navigate(['/words']);
  }
}
