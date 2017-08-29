import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFormComponent } from './budget-form.component';

describe('BudgetFormComponent', () => {
  let component: BudgetFormComponent;
  let fixture: ComponentFixture<BudgetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
