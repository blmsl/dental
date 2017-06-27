import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientShowDetailComponent } from './patient-show-detail.component';

describe('PatientShowDetailComponent', () => {
  let component: PatientShowDetailComponent;
  let fixture: ComponentFixture<PatientShowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientShowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientShowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
