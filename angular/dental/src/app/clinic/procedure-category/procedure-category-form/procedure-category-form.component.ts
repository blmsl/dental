import { FlashMessagesService } from 'angular2-flash-messages';
import { ProcedureCategoryService } from './../shared/procedure-category.service';
import { ProcedureCategory } from './../shared/procedure-category';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-procedure-category-form',
  templateUrl: './procedure-category-form.component.html',
  styleUrls: ['./procedure-category-form.component.css']
})
export class ProcedureCategoryFormComponent implements OnInit {

  title:String = "";
  procedureCategory:ProcedureCategory = new ProcedureCategory();
  procedureCategoryFormGroup:FormGroup;

  constructor(
    private _route:ActivatedRoute
    ,private _router:Router
    ,private _service:ProcedureCategoryService
    ,private _flashMessagesService: FlashMessagesService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.procedureCategoryFormGroup = this._formBuilder.group({
      description:[null, Validators.required]
    });
    var id = this._route.params.subscribe(params => {
      var id = params['id'];
      this.title =!id?'Creating':'Editing';
      if (!id)
        return; 
      this._service.get(id)
        .subscribe(
          data => this.procedureCategory = data,
          response => {});
    });
  }

  save(){
    console.log(this.procedureCategoryFormGroup.valid);
    let lServiceResult;
    if (this.procedureCategory.id)
      lServiceResult = this._service.update(this.procedureCategory);
    else
      lServiceResult = this._service.create(this.procedureCategory);
    
    lServiceResult.subscribe(res => {      
      this._flashMessagesService.show('Procedure Category successfully '+(this.procedureCategory.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
      this._router.navigate(['/procedure-categories'])
    },
    (err) => {
      this._flashMessagesService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
    });

  }
}
