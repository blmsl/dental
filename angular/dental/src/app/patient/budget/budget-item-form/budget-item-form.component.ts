import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

import { Dentist } from './../../../team/dentist/shared/dentist';
import { Plan } from './../../../clinic/plan/shared/plan';
import { BudgetItem } from './../shared/budget-item';
import { Treatment } from './../../../treatment/treatment/shared/treatment';

@Component({
  selector: 'app-budget-item-form',
  templateUrl: './budget-item-form.component.html',
  styleUrls: ['./budget-item-form.component.css']
})
export class BudgetItemFormComponent implements OnInit {

  @Input('budget-item') 
  budgetItem:BudgetItem;

  @Input('plans')       
  plans:Plan[];

  @Input('dentists')    
  dentists:Dentist[];
  
  @Input('treatments')    
  treatments:Treatment[];

  constructor() { }

  ngOnInit() {
  }

}
