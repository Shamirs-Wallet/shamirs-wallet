import { Injectable } from '@angular/core';
import { Combination } from '../data/combination';
import { Buffer } from 'buffer';

declare var { split, combine }: any;

@Injectable({
  providedIn: 'root'
})
export class ShamirService {
  shards: string[];

  readMode: boolean;
  wordCount = 0;
  combination: Combination;
  pin: number;
  words: string[];
  shares = this.combination === Combination.Normal ? 3 : 5;
  threshold = this.combination === Combination.Normal ? 5 : 10;

  constructor() {
    this.wordCount = 24;
  }

  clear() {
    this.wordCount = 0;
    this.combination = undefined;
    this.words = [];
  }

  checkConditions(): boolean {
    if (this.combination === undefined) {
      console.warn('Keine Kombination ausgewählt');
      return false;
    }

    if (this.wordCount === 0) {
      console.warn('Die Anzahl der Wörter wurde nicht gewählt');
      return false;
    }

    if (this.words.length === 0) {
      console.warn('Keine Wörter zum Verschlüsseln vorhanden');
      return false;
    }

    return true;
  }

  generateShards() {
    if (this.checkConditions() === false) {
      console.error('Die Vorraussetzungen werden nicht erfüllt');
      return;
    }

    const secret = Buffer.from(this.words.join(' '));
    const shards = split(secret, { shares: 5, threshold: 3 });

    console.log(shards);

    // this.shards = shards;
    this.shards = [];
  }

  addShard(shard: string) {
    if (this.checkConditions() === false) {
      throw new Error('Kombination nicht ausgewählt.');
    }

    if (Combination.Normal && this.shards.length > 5) {
      console.warn('Bei Kombination 3/5 wurden bereits alle Teilschlüssel eingescannt');
      return;
    }

    if (Combination.Extended && this.shards.length > 10) {
      console.warn('Bei Kombination 5/10 wurden bereits alle Teilschlüssel eingescannt');
      return;
    }

    if (this.shards.includes(shard)) {
      throw new Error('Teilschlüssel wurde bereits hinzugefügt');
    }

    this.shards.push(shard);
  }

  getSuperPasswort() {
    return combine(this.shards);
  }
}
