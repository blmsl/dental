import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core';

import { TreatmentService } from './shared/treatment.service';
import { Treatment } from './shared/treatment';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.css']
})
export class TreatmentComponent implements OnInit {

  treatments:Array<Treatment> = [];

  constructor(
    private _service:TreatmentService
    ,private _route:ActivatedRoute
    ,private _flashMessagesService:FlashMessagesService
    ) { }

  ngOnInit() {
    console.log(this._route.parent.params);
    this._route.parent.params
      .subscribe(
        params => {
          let lPatientId = params['id'];
          console.log(lPatientId);
          if (!lPatientId) return;

          this._service.getAllFromPatient(lPatientId)
            .subscribe(data => this.treatments = data);
        }
    )
  }

  delete(pTreatment:Treatment){
    this._service.delete(pTreatment.patient_id,pTreatment.id)
      .subscribe(
        res => {
          let lIndex = this.treatments.indexOf(pTreatment);
          this.treatments.splice(lIndex,1);
          this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
        },
        err => {
          this._flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 1000 })
        }
      );
  }

}