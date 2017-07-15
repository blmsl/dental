import { TestBed, inject } from '@angular/core/testing';

import { AnamnesisService } from './anamnesis.service';

describe('AnamnesisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnamnesisService]
    });
  });

  it('should ...', inject([AnamnesisService], (service: AnamnesisService) => {
    expect(service).toBeTruthy();
  }));
});
