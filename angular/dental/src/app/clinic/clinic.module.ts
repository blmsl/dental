
import { PlanService } from './plan/shared/plan.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesModule } from './../directives/directives.module';
import { ProcedureCategoryService } from './procedure-category/shared/procedure-category.service';
import { ProcedureService } from './procedure/shared/procedure.service';
import { ProcedureCategoryComponent } from './procedure-category/procedure-category.component';
import { ProcedureCategoryFormComponent } from './procedure-category/procedure-category-form/procedure-category-form.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ProcedureFormComponent } from './procedure/procedure-form/procedure-form.component';
import { ClinicRountingModule } from './clinic.routing.module';
import { PlanComponent } from './plan/plan.component';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';

import { PatientGroupService } from './patient-group/shared/patient-group.service';
import { PatientGroupComponent } from './patient-group/patient-group.component';
import { PatientGroupFormComponent } from './patient-group/patient-group-form/patient-group-form.component';

@NgModule({
  imports: [
    SharedModule
    ,ClinicRountingModule
  ],
  providers :[
    PatientGroupService
  ],
  declarations: [
    ProcedureCategoryComponent
  , ProcedureCategoryFormComponent
  , ProcedureComponent
  , ProcedureFormComponent
  , PlanComponent
  , PlanFormComponent
  , PatientGroupComponent
  , PatientGroupFormComponent
  
  ]
})
export class ClinicModule { }
