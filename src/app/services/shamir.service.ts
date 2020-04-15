import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { split, combine } from 'shamirs-secret-sharing-ts';

@Injectable({
  providedIn: 'root'
})
export class ShamirService {
  private shards: Buffer[];

  readMode: boolean;
  wordCount: number;
  words: string[];
  shares: number;
  threshold: number;

  initialize() {
    this.shards = new Array<Buffer>();

    this.readMode = undefined;
    this.wordCount = undefined;
    this.words = undefined;
    this.shares = undefined;
    this.threshold = undefined;
  }

  generateShards() {
    console.log('readMode ', this.readMode);
    console.log('wordCount ', this.wordCount);
    console.log('words ', this.words);
    console.log('shares ', this.shares);
    console.log('threshold ', this.threshold);

    const secret = Buffer.from(this.words.join(' '), 'utf8');
    const shards = split(secret, { shares: this.shares, threshold: this.threshold });

    this.shards = shards;
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

  getShards() {
    return this.shards;
  }

  getSuperPasswort() {
    if (this.readMode) {
      return combine(this.shards).toString('utf8');
    } else {
      return null;
    }
  }
}
