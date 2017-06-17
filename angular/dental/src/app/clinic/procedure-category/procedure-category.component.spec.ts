import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCategoryComponent } from './procedure-category.component';

describe('ProcedureCategoryComponent', () => {
  let component: ProcedureCategoryComponent;
  let fixture: ComponentFixture<ProcedureCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
