import { TestBed, inject } from '@angular/core/testing';

import { LoadRequestService } from './load-request.service';

describe('LoadRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadRequestService]
    });
  });

  it('should be created', inject([LoadRequestService], (service: LoadRequestService) => {
    expect(service).toBeTruthy();
  }));
});
