import { ProcedureCategoryService } from './../../procedure-category/shared/procedure-category.service';
import { ProcedureCategory } from './../../procedure-category/shared/procedure-category';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ProcedureService } from './../shared/procedure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Procedure } from './../shared/procedure';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-form',
  templateUrl: './procedure-form.component.html',
  styleUrls: ['./procedure-form.component.css']
})
export class ProcedureFormComponent implements OnInit {

  title:String = "";
  procedure:Procedure = new Procedure();
  procedureCategories:Array<ProcedureCategory> = [];
  procedureFormGroup:FormGroup;

  constructor(
    private _route:ActivatedRoute
    ,private _router:Router
    ,private _service:ProcedureService
    ,private _procedureCategoryService:ProcedureCategoryService
    ,private _flashMessagesService: FlashMessagesService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.procedureFormGroup = this._formBuilder.group({
      description:[null, Validators.required]
      ,procedure_category_id:[null, Validators.required]
    });

    this._procedureCategoryService.getAll().subscribe(data => this.procedureCategories = data);
    var id = this._route.params.subscribe(params => {
      var id = params['id'];
      this.title =!id?'Creating':'Editing';
      if (!id)
        return; 
      this._service.get(id)
        .subscribe(
          data => this.procedure = data,
          response => {});
    });
  }

  save(){
    console.log(this.procedureFormGroup.valid);
    let lServiceResult;
    if (this.procedure.id)
      lServiceResult = this._service.update(this.procedure);
    else
      lServiceResult = this._service.create(this.procedure);
    
    lServiceResult.subscribe(res => {      
      this._flashMessagesService.show('Procedure Category successfully '+(this.procedure.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
      this._router.navigate(['/procedures'])
    },
    (err) => {
      this._flashMessagesService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
    });

  }

}
