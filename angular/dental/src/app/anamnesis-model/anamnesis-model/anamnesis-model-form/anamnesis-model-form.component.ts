import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnamnesisModelService } from './../shared/anamnesis-model.service';
import { Component, OnInit } from '@angular/core';

import { AnamnesisModel } from './anamnesis-model';

@Component({
  selector: 'app-anamnesis-model-form',
  templateUrl: './anamnesis-model-form.component.html',
  styleUrls: ['./anamnesis-model-form.component.css']
})
export class AnamnesisModelFormComponent implements OnInit {

  title:string;
  anamnesisModel:AnamnesisModel = new AnamnesisModel();
  anamnesisModelFormGroup:FormGroup;

  constructor(
    private _service:AnamnesisModelService
    ,private _route:ActivatedRoute
    ,private _router:Router
    ,private _formBuilder:FormBuilder
    ,private _flashMessagesService:FlashMessagesService
  ){ }

  ngOnInit() {
    this.anamnesisModelFormGroup = this._formBuilder.group({
      description:[null,Validators.required]
    });
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.title = id?'Editing':'Creating';
      if (!id) return;

      this._service.get(id).subscribe(data => this.anamnesisModel = data);
    })
  }


  save(){
    let lServiceResult;
    if (this.anamnesisModel.id)
      lServiceResult = this._service.update(this.anamnesisModel)
    else
      lServiceResult = this._service.create(this.anamnesisModel)
    
    lServiceResult.subscribe(
      res => {
        this._flashMessagesService.show('Anamnesis Model successfully '+(this.anamnesisModel.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
        this._router.navigate(['/anamnesis-models']);
      }
      ,err => {
        this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 2000 });
      });
  }

}
