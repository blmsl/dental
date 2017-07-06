import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesisModelFormComponent } from './anamnesis-model-form.component';

describe('AnamnesisModelFormComponent', () => {
  let component: AnamnesisModelFormComponent;
  let fixture: ComponentFixture<AnamnesisModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamnesisModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamnesisModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
