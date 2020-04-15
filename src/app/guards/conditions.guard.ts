import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShamirService } from '../services/shamir.service';
import { isNumber } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ConditionsGuard implements CanActivate {
  constructor(
    private shamir: ShamirService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkConditions();
  }

  checkConditions(): boolean {
    if (this.shamir.readMode) {
      return this.checkConditionsReading();
    } else {
      return this.checkConditionsWriting();
    }
  }

  checkConditionsReading() {
    if (!this.shamir.shares || !this.shamir.threshold || this.shamir.shares < this.shamir.threshold) {
      console.error('Gewählte Kombination der Scherben nicht möglich');
      return false;
    }

    return true;
  }

  checkConditionsWriting() {
    if (!this.shamir.wordCount || this.shamir.wordCount === 0) {
      console.warn('Die Anzahl der Wörter wurde nicht gewählt');
      return false;
    }

    if (!this.shamir.words || this.shamir.words.length === 0) {
      console.warn('Keine Wörter zum Verschlüsseln vorhanden');
      return false;
    }

    if (!this.shamir.shares || !this.shamir.threshold || this.shamir.shares < this.shamir.threshold) {
      console.error('Gewählte Kombination der Scherben nicht möglich');
      return false;
    }

    return true;
  }
}
