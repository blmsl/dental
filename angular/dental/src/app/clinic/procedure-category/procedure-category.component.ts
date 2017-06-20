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
  constructor(private _service:ProcedureCategoryService) { }

  ngOnInit() {
    this._service.getAll()
      .subscribe(data => this.procedureCategories = data);
  }

  delete(ProcedureCategory){

  }

}
