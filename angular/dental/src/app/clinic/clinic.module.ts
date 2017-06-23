import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './../directives/directives.module';
import { ProcedureCategoryService } from './procedure-category/shared/procedure-category.service';
import { ProcedureService } from './procedure/shared/procedure.service';
import { ProcedureCategoryComponent } from './procedure-category/procedure-category.component';
import { ProcedureCategoryFormComponent } from './procedure-category/procedure-category-form/procedure-category-form.component';
import { ProcedureComponent } from './procedure/procedure.component';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
    ,FormsModule
    ,ReactiveFormsModule
    ,DirectivesModule
  ],
  providers :[
    ProcedureCategoryService
    ,ProcedureService
  ],
  declarations: [ProcedureCategoryComponent, ProcedureCategoryFormComponent, ProcedureComponent]
})
export class ClinicModule { }
