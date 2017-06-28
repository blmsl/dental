import { MaterializeModule } from 'angular2-materialize';
import { PatientRountingModule } from './patient.routing.module';

import { UtilsModule } from './../utils/utils.module';
import { DirectivesModule } from './../directives/directives.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientGroupService } from './patient-group/shared/patient-group.service';
import { PatientGroupComponent } from './patient-group/patient-group.component';
import { PatientGroupFormComponent } from './patient-group/patient-group-form/patient-group-form.component';
import { PatientService } from './patient/shared/patient.service';
import { PatientComponent } from './patient/patient.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { PatientShowDetailComponent } from './patient/patient-show-detail/patient-show-detail.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
    ,ReactiveFormsModule
    ,FormsModule
    ,MaterializeModule
    
    ,DirectivesModule
    ,UtilsModule
    ,PatientRountingModule
  ],
  declarations: [
    PatientGroupComponent
    , PatientGroupFormComponent
    , PatientComponent
    , PatientFormComponent, PatientShowDetailComponent, PatientDashboardComponent
  ],
  providers :[
    PatientGroupService
    ,PatientService
  ],
  
})
export class PatientModule { }
