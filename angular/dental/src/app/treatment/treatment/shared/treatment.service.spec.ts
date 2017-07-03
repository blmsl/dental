import { TestBed, inject } from '@angular/core/testing';

import { TreatmentService } from './treatment.service';

describe('TreatmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreatmentService]
    });
  });

  it('should ...', inject([TreatmentService], (service: TreatmentService) => {
    expect(service).toBeTruthy();
  }));
});
