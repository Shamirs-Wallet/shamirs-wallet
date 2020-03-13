import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-word-length',
  templateUrl: './select-word-length.page.html',
  styleUrls: ['./select-word-length.page.scss'],
})
export class SelectWordLengthPage implements OnInit {
  routeSubscription: Subscription;
  readMode: boolean;

  constructor() { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(async params => {
      
    });
  }

  getSelectSecurityRouterLink() {
    return ['/select-security', 0, 24]; // TODO Read oder Write?; Wörterlänge holen
  }
}
