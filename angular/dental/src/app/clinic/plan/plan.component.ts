import { FlashMessagesService } from 'angular2-flash-messages';
import { PlanService } from './shared/plan.service';
import { Plan } from './shared/plan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  plans:Array<Plan> = [];

  constructor(
    private _service:PlanService
    ,private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this._service.getAll().subscribe(data => this.plans = data);
  }

  delete(pPlan:Plan){
    this._service.delete(pPlan.id)
      .subscribe(res => {
        let lIndex = this.plans.indexOf(pPlan);
        this.plans.splice(lIndex,1);
        this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
      })
  }

}
