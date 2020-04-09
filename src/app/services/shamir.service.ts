import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';

declare var { split, combine }: any;

@Injectable({
  providedIn: 'root'
})
export class ShamirService {
  private _shards: string[];

  readMode: boolean;
  wordCount = 0;
  words: string[];
  pin: number;
  shares: number;
  threshold: number;

  get shards() {
    return this._shards;
  }

  constructor() {
    this.wordCount = 24;
  }

  clear() {
    this.wordCount = 0;
    this.words = [];
  }

  generateShards() {
    const secret = Buffer.from(this.words.join(' '));
    const shards = split(secret, { shares: this.shares, threshold: this.threshold });

    console.log(shards);

    this._shards = shards;
  }

  addShard(shard: string) {
    if (this.shards.length > this.shares) {
      console.error(`Es existieren mehr Scherben als konfiguriert. Scherben: ${this.shards.length}, Gewollt: ${this.shares}`);
      return;
    }

    if (this.shards.includes(shard)) {
      console.error('Scherbe wurde bereits hinzugefügt');
    }

    this.shards.push(shard);
  }

  deleteShard(index: number) {
    const shard = this.shards[index];
    if (shard === undefined) {
      console.error('Scherbe konnte nicht entfernt werden.');
      return;
    }

    delete this.shards[index];
  }

  getSuperPasswort() {
    return combine(this.shards);
  }
}
