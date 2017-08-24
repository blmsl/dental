import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { BudgetItem } from './../shared/budget-item';
import { Plan } from './../../../clinic/plan/shared/plan';
import { PlanService } from './../../../clinic/plan/shared/plan.service';
import { Dentist } from './../../../team/dentist/shared/dentist';
import { DentistService } from './../../../team/dentist/shared/dentist.service';
import { Procedure } from './../../../clinic/procedure/shared/procedure';
import { ProcedureService } from './../../../clinic/procedure/shared/procedure.service';

@Component({
  selector: 'patient-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input('parentFormGroup')
  parentFormGroup:FormGroup;

  budgetItemsFormArray:FormArray;

  @Input()
  budget_items:BudgetItem[];

  plans:Plan[] = [];
  procedures:Procedure[] = [];
  dentists:Dentist[] = [];

  constructor(
    private _formBuilder:FormBuilder
    ,private _planService:PlanService
    ,private _procedureService:ProcedureService
    ,private _dentistService:DentistService
  ) { }

  ngOnInit() {
    this.budgetItemsFormArray = this._formBuilder.array([]);
    this.parentFormGroup.addControl('budget_items',this.budgetItemsFormArray);
    
    this._planService.getAll().subscribe(data => this.plans = data);
    this._procedureService.getAll().subscribe(data => this.procedures = data);
    this._dentistService.getAll().subscribe(data => this.dentists = data);
  }

  addItem(){
    this.budget_items.push(new BudgetItem());
  }

  removeItem(pBudgetItem:BudgetItem){
    let index = this.budget_items.indexOf(pBudgetItem)
    this.budget_items.splice(index,1)
    this.budgetItemsFormArray.removeAt(index);
  }

}
