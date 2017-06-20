import { TestBed, inject } from '@angular/core/testing';

import { ProcedureCategoryService } from './procedure-category.service';

describe('ProcedureCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcedureCategoryService]
    });
  });

  it('should ...', inject([ProcedureCategoryService], (service: ProcedureCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
