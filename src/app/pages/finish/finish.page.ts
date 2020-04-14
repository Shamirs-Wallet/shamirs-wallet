import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/home']); // Navigate Back to Home
  }

}
