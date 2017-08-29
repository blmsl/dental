import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetItemFormComponent } from './budget-item-form.component';

describe('BudgetItemFormComponent', () => {
  let component: BudgetItemFormComponent;
  let fixture: ComponentFixture<BudgetItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
