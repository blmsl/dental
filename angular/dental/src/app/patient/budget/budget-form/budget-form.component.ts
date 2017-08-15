import { BudgetService } from './../shared/budget.service';
import { ActivatedRoute } from '@angular/router';
import { Budget } from './../shared/budget';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  budget:Budget;
  title:string;
  constructor(
    private _route:ActivatedRoute
    ,private _service:BudgetService
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => {
      let parentId = params['id'];
      if (!parentId) return;
      this.title = "Creating"
      this._route.params.subscribe(params => {
        let budgetId = params['id'];
        if (!budgetId) return;
        this.title = "Editing";
        this._service.get(parentId,budgetId)
          .subscribe(data => this.budget = data);
      })
    })
  }

}
