import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-word-length',
  templateUrl: './select-word-length.page.html',
  styleUrls: ['./select-word-length.page.scss'],
})
export class SelectWordLengthPage implements OnInit {
  routeSubscription: Subscription;
  readMode: boolean;
  mask: FormGroup;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(async params => {
      this.readMode = params.read === 1;
    });

    this.mask = new FormGroup({
      wordLength: new FormControl({ value: 24, required: true })
    });
  }

  getSelectSecurityRouterLink() {
    return ['/select-security', this.readMode ? 1 : 0, this.mask.controls.wordLength.value];
  }
}
