import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientGroupComponent } from './patient-group.component';

describe('PatientGroupComponent', () => {
  let component: PatientGroupComponent;
  let fixture: ComponentFixture<PatientGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
