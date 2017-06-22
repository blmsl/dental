import { FlashMessagesService } from 'angular2-flash-messages';


import { ProcedureCategory } from './shared/procedure-category';
import { ProcedureCategoryService } from './shared/procedure-category.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-procedure-category',
  templateUrl: './procedure-category.component.html',
  styleUrls: ['./procedure-category.component.css']
})
export class ProcedureCategoryComponent implements OnInit {

  procedureCategories:Array<ProcedureCategory> = [];
  constructor(
    private _service:ProcedureCategoryService
    ,private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {        
    this._service.getAll()
      .subscribe(data => this.procedureCategories = data);
  }

  delete(pProcedureCategory){
    if(confirm('Do you realy want to delete this record?')){
      this._service.delete(pProcedureCategory.id).subscribe(
        res => {
          var index = this.procedureCategories.indexOf(pProcedureCategory);    
          this.procedureCategories.splice(index, 1);
          this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 2000 })
          console.log(this._flashMessagesService);
          console.log("fdsfsdfsdf");
        }
      )
    }
  }
}