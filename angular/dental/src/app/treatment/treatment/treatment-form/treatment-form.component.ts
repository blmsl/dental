
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PlanService } from './../../../clinic/plan/shared/plan.service';
import { Plan } from './../../../clinic/plan/shared/plan';
import { TreatmentService } from './../shared/treatment.service';
import { Treatment } from './../shared/treatment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment-form',
  templateUrl: './treatment-form.component.html',
  styleUrls: ['./treatment-form.component.css']
})
export class TreatmentFormComponent implements OnInit {

  title:string;
  plans:Array<Plan> = [];
  treatment:Treatment = new Treatment();
  treatmentFormGroup:FormGroup;

  constructor(
    private _plansService:PlanService
    ,private _service:TreatmentService
    ,private _route:ActivatedRoute
    ,private _router:Router
    ,private _formBuilder:FormBuilder
    ,private _flashMessageService:FlashMessagesService

  ) { }

  ngOnInit() {
    this.treatmentFormGroup = this._formBuilder.group({
      plan_id:[null,Validators.required]
    });

    this._plansService.getAll().subscribe(data => this.plans = data);
    this._route.parent.params.subscribe(params =>{
      let lPatientId = params['id'];
      
      if (!lPatientId) return;
      this.treatment.patient_id = lPatientId;
      console.log(this.treatment.patient_id);
      this.title = "Creating";  
      this._route.params.subscribe(params =>{
        let lTreatmentId = params['id'];
        if (!lTreatmentId) return;
        this.title = "Editing";
        this._service.get(lPatientId,lTreatmentId).subscribe(data => this.treatment = data);
      })
      
    })
  }

  save(){
    let lServiceResult;
    if (this.treatment.id)
      lServiceResult = this._service.update(this.treatment.patient_id,this.treatment);
    else
      lServiceResult = this._service.create(this.treatment.patient_id,this.treatment);
    
    lServiceResult.subscribe(
      res => {
        this._flashMessageService.show('Treatment successfully '+(this.treatment.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
        this._router.navigate(['/patients',this.treatment.patient_id,'treatments'])
      }
      ,err => {
        console.error(err);
        this._flashMessageService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })}
      )
  }

}
