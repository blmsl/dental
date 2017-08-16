import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import { PlanService } from './../../../clinic/plan/shared/plan.service';
import { Plan } from './../../../clinic/plan/shared/plan';
import { BudgetService } from './../shared/budget.service';
import { Budget } from './../shared/budget';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  budget:Budget = new Budget();
  plans:Plan[] = [];
  title:string;
  budgetFormGroup:FormGroup;
  constructor(
    private _route:ActivatedRoute
    ,private _service:BudgetService
    ,private _planService:PlanService
    ,private _formBuilder:FormBuilder
    ,private _flashMessagesService:FlashMessagesService
    ,private _router:Router
  ) { }

  ngOnInit() {
    this.budgetFormGroup = this._formBuilder.group({
      id:[null]
      ,description:[null]
      ,patient_id:[null]
    
    });
  
    this._planService.getAll().subscribe(data => this.plans = data);
    this._route.parent.params.subscribe(params => {
      let patientId = params['id'];
      if (!patientId) return;

      this.title = "Creating";
      this.budget.patient_id = patientId;
      

      this._route.params.subscribe(params => {
        let budgetId = params['id'];
        if (!budgetId) return;
        this.title = "Editing";
        this._service.get(patientId,budgetId)
          .subscribe(data => this.budget = data);
      })
    })
  }

  save(){
    let lServiceRequest;
    if (this.budget.id)
      lServiceRequest = this._service.update(this.budget.patient_id,this.budget)
    else
      lServiceRequest = this._service.create(this.budget.patient_id,this.budget);

    lServiceRequest.subscribe(
      res =>{this._flashMessagesService.show('Budget successfully '+(this.budget.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
      this._router.navigate(['../'], {relativeTo: this._route})
    },
    (err) => {
      this._flashMessagesService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
    });
  }

  addItem(){
  
    // const control = <FormArray>this.anamnesisModelFormGroup.controls['anamnesis_questions'];
    // control.push(
    //   this._formBuilder.group({
    //     question_active:[null]
    //   })
    // ); 
  
  }

}
