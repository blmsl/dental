import { FlashMessagesService } from 'angular2-flash-messages';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanService } from './../shared/plan.service';
import { Plan } from './../shared/plan';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {

  title:string;
  plan:Plan = new Plan();
  planFormGroup:FormGroup;

  constructor(
    private _service:PlanService
    ,private _route:ActivatedRoute
    ,private _router:Router
    ,private _flashMessagesService:FlashMessagesService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.planFormGroup = this._formBuilder.group({
      description:[null,Validators.required]
    });

    this._route.params.subscribe(params => {
      let id = params['id'];
      this.title = (id)?"Editing":"Creating";
      if (!id) return;
      this._service.get(id).subscribe(data => this.plan = data);
    });
  }

  save(){
    let lServiceResult;
    if (this.plan.id)
      lServiceResult = this._service.update(this.plan);
    else
      lServiceResult = this._service.create(this.plan);

    lServiceResult.subscribe(res => {
      this._flashMessagesService.show('Procedure Category successfully '+(this.plan.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
      this._router.navigate(['../'], {relativeTo : this._route});
    })

  }
}
