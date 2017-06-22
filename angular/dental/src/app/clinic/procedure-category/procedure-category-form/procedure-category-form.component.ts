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
  title:String = "";
  procedureCategory:ProcedureCategory = new ProcedureCategory();

  constructor(
    private route:ActivatedRoute
    ,private router:Router
    ,private service:ProcedureCategoryService
  ) { }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
      this.title =!id?'Creating':'Editing';
      if (!id)
        return; 
      this.service.get(id)
        .subscribe(
          data => this.procedureCategory = data,
          response => {});
    });
  }

  salvar(){
    if (this.procedureCategory.id)
      this.service.update(this.procedureCategory).subscribe(res => this.router.navigate(['/procedure-categories']));
    else
      this.service.create(this.procedureCategory).subscribe(res => this.router.navigate(['/procedure-categories']));
  }

}
