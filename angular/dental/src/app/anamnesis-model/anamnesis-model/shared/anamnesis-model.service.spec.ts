import { TestBed, inject } from '@angular/core/testing';

import { AnamnesisModelService } from './anamnesis-model.service';

describe('AnamnesisModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnamnesisModelService]
    });
  });

  it('should ...', inject([AnamnesisModelService], (service: AnamnesisModelService) => {
    expect(service).toBeTruthy();
  }));
});
