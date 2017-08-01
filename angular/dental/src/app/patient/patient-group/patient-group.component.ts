import { FlashMessagesService } from 'angular2-flash-messages';
import { PatientGroupService } from './shared/patient-group.service';
import { PatientGroup } from './shared/patient-group';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-group',
  templateUrl: './patient-group.component.html',
  styleUrls: ['./patient-group.component.css']
})
export class PatientGroupComponent implements OnInit {

  patientGroups:Array<PatientGroup> = [];
  constructor(
    private _service:PatientGroupService
    ,private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {        
    this._service.getAll()
      .subscribe(data => this.patientGroups = data);
  }

  delete(pPatientGroup:PatientGroup){
    this._service.delete(pPatientGroup.id).subscribe(
      res => {
        let index = this.patientGroups.indexOf(pPatientGroup);    
        this.patientGroups.splice(index, 1);
        this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
      }
    )   
  }

}
