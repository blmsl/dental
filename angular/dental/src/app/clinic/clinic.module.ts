import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedureCategoryComponent } from './procedure-category/procedure-category.component';
import { ProcedureCategoryFormComponent } from './procedure-category/procedure-category-form/procedure-category-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProcedureCategoryComponent, ProcedureCategoryFormComponent]
})
export class ClinicModule { }
