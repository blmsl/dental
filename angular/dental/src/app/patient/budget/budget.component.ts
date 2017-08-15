import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BudgetService } from './shared/budget.service';
import { Budget } from './shared/budget';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budgets:Budget[] = [];
  
  constructor(
    private _service:BudgetService
    ,private _route:ActivatedRoute
    ,private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this._route.parent.params
      .subscribe(params => {
        let patientId = params['id'];
        if (!patientId) return;
        this._service.getAllFromPatient(patientId)
          .subscribe(data => this.budgets = data)
      })
  }

  delete(pBudget:Budget){
    this._service.delete(pBudget.patient_id,pBudget.id)
      .subscribe(
        res => {
          let index = this.budgets.indexOf(pBudget);
          this.budgets.splice(index,1);
          this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
        },
          err => {
            this._flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 1000 })
        }
      )
  }

}
