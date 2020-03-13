import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-security',
  templateUrl: './select-security.page.html',
  styleUrls: ['./select-security.page.scss'],
})
export class SelectSecurityPage implements OnInit {
  routeSubscription: Subscription;
  readMode: boolean;
  wordLength: number;
  mask: FormGroup;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(async params => {
      this.readMode = params.read === 1;
      this.wordLength = Number(params.wordLength);
    });

    this.mask = new FormGroup({
      combination: new FormControl({ value: 35, required: true })
    });
  }

  getWordsRouterLink() {
    return ['/words', this.readMode ? 1 : 0, this.wordLength, this.mask.controls.combination.value];
  }
}
