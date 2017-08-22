import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Plan } from './../../../clinic/plan/shared/plan';
import { PlanService } from './../../../clinic/plan/shared/plan.service';
import { Dentist } from './../../../team/dentist/shared/dentist';
import { DentistService } from './../../../team/dentist/shared/dentist.service';
import { Procedure } from './../../../clinic/procedure/shared/procedure';
import { ProcedureService } from './../../../clinic/procedure/shared/procedure.service';
import { Budget } from './../shared/budget';
import { BudgetService } from './../shared/budget.service';
import { BudgetItem } from './../shared/budget-item';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  budget:Budget = new Budget();
  plans:Plan[] = [];
  procedures:Procedure[] = [];
  dentists:Dentist[] = [];
  title:string;
  budgetFormGroup:FormGroup;

  constructor(
    private _route:ActivatedRoute
    ,private _service:BudgetService
    ,private _planService:PlanService
    ,private _procedureService:ProcedureService
    ,private _dentistService:DentistService
    ,private _formBuilder:FormBuilder
    ,private _flashMessagesService:FlashMessagesService
    ,private _router:Router
  ) { }

  ngOnInit() {
    this.budgetFormGroup = this._formBuilder.group({
      id:[null]
      ,description:[null]
      ,patient_id:[null]
      ,budget_items: this._formBuilder.array([])
    
    });
  
    this._planService.getAll().subscribe(data => this.plans = data);
    this._procedureService.getAll().subscribe(data => this.procedures = data);
    this._dentistService.getAll().subscribe(data => this.dentists = data);
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
    
    const control = <FormArray>this.budgetFormGroup.controls['budget_items'];
    console.log(control);
    control.push(
      this._formBuilder.group({   
        plan_id:[null]
        ,procedure_id:[null]
      })
    ); 

    this.budget.budget_items.push(new BudgetItem());
    
  }

  removeItem(pBudgetItem:BudgetItem){
    let index = this.budget.budget_items.indexOf(pBudgetItem)
    this.budget.budget_items.splice(index,1)
    const control = <FormArray>this.budgetFormGroup.controls['budget_items'];
    control.removeAt(index);
  }

}
