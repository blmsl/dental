import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PatientService } from './../shared/patient.service';
import { Patient } from './../shared/patient';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  patient:Patient;

  constructor(
    private route:ActivatedRoute
    ,private _service:PatientService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe( params => {
      let id = params['id'];
      if (!id) return;
      this._service.get(id).subscribe(data => {
        this.patient = data;
        console.log(this.patient);
      } )      
    });
  }

}
