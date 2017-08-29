import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGroupFormComponent } from './patient-group-form.component';

describe('PatientGroupFormComponent', () => {
  let component: PatientGroupFormComponent;
  let fixture: ComponentFixture<PatientGroupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGroupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
