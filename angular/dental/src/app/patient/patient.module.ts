import { PatientGroupService } from './../clinic/patient-group/shared/patient-group.service';

import { TreatmentService } from './../treatment/treatment/shared/treatment.service';
import { TreatmentModule } from './../treatment/treatment.module';
import { AnamnesisModule } from './../anamnesis/anamnesis.module';
import { MaterializeModule } from 'angular2-materialize';
import { PatientRountingModule } from './patient.routing.module';

import { SharedModule } from './../shared/shared.module';
import { DirectivesModule } from './../directives/directives.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PatientService } from './patient/shared/patient.service';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { PatientShowDetailComponent } from './patient/patient-show-detail/patient-show-detail.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientLayoutComponent } from './patient/patient-layout/patient-layout.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetFormComponent } from './budget/budget-form/budget-form.component';

@NgModule({
  imports: [
    SharedModule
    ,PatientRountingModule
    ,AnamnesisModule
    ,TreatmentModule
  ],
  declarations: [
    
    PatientComponent, 
    PatientFormComponent, 
    PatientShowDetailComponent, 
    PatientDashboardComponent, 
    PatientLayoutComponent, BudgetComponent, BudgetFormComponent
  ],
  providers :[
    PatientService,TreatmentService,PatientGroupService
  ],
  
})
export class PatientModule { }
