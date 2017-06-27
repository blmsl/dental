import { PatientService } from './../shared/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from './../shared/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-show-detail',
  templateUrl: './patient-show-detail.component.html',
  styleUrls: ['./patient-show-detail.component.css']
})
export class PatientShowDetailComponent implements OnInit {

  patient:Patient = new Patient();
  
  constructor(
    private _route:ActivatedRoute
    ,private _service:PatientService
    
  ) { }

  ngOnInit() {
    var id = this._route.params.subscribe(params => {
      var id = params['id'];
      if (!id)
        return; 
      this._service.get(id)
        .subscribe(
          data => this.patient = data,
          response => {});
    });
  }

}
