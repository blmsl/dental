import { PlanService } from './../shared/plan.service';
import { Plan } from './../shared/plan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  plan:Plan = new Plan();

  constructor(private _service:PlanService) { }

  ngOnInit() {
  }

}
