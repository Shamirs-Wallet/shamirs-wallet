import { TestBed } from '@angular/core/testing';

import { ShamirService } from './shamir.service';

describe('ShamirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShamirService = TestBed.get(ShamirService);
    expect(service).toBeTruthy();
  });
});
