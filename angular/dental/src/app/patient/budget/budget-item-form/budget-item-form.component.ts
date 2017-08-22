import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Dentist } from './../../../team/dentist/shared/dentist';
import { Plan } from './../../../clinic/plan/shared/plan';
import { BudgetItem } from './../shared/budget-item';
import { Procedure } from './../../../clinic/procedure/shared/procedure';


@Component({
  selector: '[patient-budget-item-form]',
  templateUrl: './budget-item-form.component.html',
  styleUrls: ['./budget-item-form.component.css']
})
export class BudgetItemFormComponent implements OnInit {

  @Input('budget-item') 
  budgetItem:BudgetItem;

  @Input('budgetItemformGroup')
  budgetItemformGroup:FormGroup;
  
  @Input('plans')       
  plans:Plan[];

  @Input('dentists')    
  dentists:Dentist[];
  
  @Input('procedures')    
  procedures:Procedure[];

  @Output('onRemoveItem')
  onRemoveItem:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit() {
  }

  removeItem(){
    this.onRemoveItem.emit(this.budgetItem)
  }

}
