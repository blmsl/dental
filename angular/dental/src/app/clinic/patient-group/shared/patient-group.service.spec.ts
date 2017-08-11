import { TestBed, inject } from '@angular/core/testing';

import { PatientGroupService } from './patient-group.service';

describe('PatientGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientGroupService]
    });
  });

  it('should ...', inject([PatientGroupService], (service: PatientGroupService) => {
    expect(service).toBeTruthy();
  }));
});
