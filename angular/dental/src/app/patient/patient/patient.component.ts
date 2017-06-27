import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';

import { PatientService } from './shared/patient.service';
import { Patient } from './shared/patient';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients:Array<Patient> = [];
  constructor(
    private _service : PatientService
    ,private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {        
    this._service.getAll()
      .subscribe(data => this.patients = data);
  }

  delete(pPatient:Patient){
    this._service.delete(pPatient.id).subscribe(
      res => {
        var index = this.patients.indexOf(pPatient);    
        this.patients.splice(index, 1);
        this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
      }
    )   
  }
}
