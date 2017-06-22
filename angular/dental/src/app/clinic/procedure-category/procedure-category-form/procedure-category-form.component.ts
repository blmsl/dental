import { FlashMessagesService } from 'angular2-flash-messages';
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
    ,private _flashMessagesService: FlashMessagesService
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
    let lServiceResult;
    if (this.procedureCategory.id)
      lServiceResult = this.service.update(this.procedureCategory);
    else
      lServiceResult = this.service.create(this.procedureCategory);
    
    lServiceResult.subscribe(res => {
      console.log(this._flashMessagesService);
      this._flashMessagesService.show('Procedure Category successfully Created!', { cssClass: 'alert-success', timeout: 2000 })
      this.router.navigate(['/procedure-categories'])
    });

  }

}
