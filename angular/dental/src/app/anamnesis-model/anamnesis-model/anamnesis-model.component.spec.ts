import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesisModelComponent } from './anamnesis-model.component';

describe('AnamnesisModelComponent', () => {
  let component: AnamnesisModelComponent;
  let fixture: ComponentFixture<AnamnesisModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamnesisModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamnesisModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
