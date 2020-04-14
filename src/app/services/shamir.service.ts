import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { split, combine } from 'shamirs-secret-sharing-ts';

@Injectable({
  providedIn: 'root'
})
export class ShamirService {
  private _shards: Buffer[];

  readMode: boolean;
  wordCount: number;
  words: string[];
  pin: number;
  shares: number;
  threshold: number;

  get shards() {
    return this._shards;
  }

  clear() {
    this.wordCount = 0;
    this.words = [];
  }

  generateShards() {
    console.log('readMode ', this.readMode);
    console.log('wordCount ', this.wordCount);
    console.log('words ', this.words);
    console.log('pin ', this.pin);
    console.log('shares ', this.shares);
    console.log('threshold ', this.threshold);

    const secret = Buffer.from(this.words.join(' '));
    const shards = split(secret, { shares: this.shares, threshold: this.threshold });

    this._shards = shards;
  }

  addShard(shard: Buffer) {
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
