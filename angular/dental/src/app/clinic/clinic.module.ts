import { ProcedureCategoryService } from './procedure-category/shared/procedure-category.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedureCategoryComponent } from './procedure-category/procedure-category.component';
import { ProcedureCategoryFormComponent } from './procedure-category/procedure-category-form/procedure-category-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers :[
    ProcedureCategoryService
  ],
  declarations: [ProcedureCategoryComponent, ProcedureCategoryFormComponent]
})
export class ClinicModule { }
