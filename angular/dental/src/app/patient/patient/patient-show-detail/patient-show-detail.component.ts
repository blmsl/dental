import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

import { Patient } from './../shared/patient';
@Component({
  selector: 'patient-patient-show-detail',
  templateUrl: './patient-show-detail.component.html',
  styleUrls: ['./patient-show-detail.component.css']
})
export class PatientShowDetailComponent{

  @Input()
  patient:Patient;
 
}
