import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCategoryFormComponent } from './procedure-category-form.component';

describe('ProcedureCategoryFormComponent', () => {
  let component: ProcedureCategoryFormComponent;
  let fixture: ComponentFixture<ProcedureCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
