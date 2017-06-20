import { ProcedureCategoryService } from './../shared/procedure-category.service';
import { ProcedureCategory } from './../shared/procedure-category';
import { RouterModule,Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedure-category-form',
  templateUrl: './procedure-category-form.component.html',
  styleUrls: ['./procedure-category-form.component.css']
})
export class ProcedureCategoryFormComponent implements OnInit {

  procedureCategory:ProcedureCategory = new ProcedureCategory();

  constructor(
    private route:ActivatedRoute
    ,private service:ProcedureCategoryService
  ) { }

  ngOnInit() {
   
  }
 

}
