import { DirectivesModule } from './../directives/directives.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientGroupService } from './patient-group/shared/patient-group.service';
import { PatientGroupComponent } from './patient-group/patient-group.component';
import { PatientGroupFormComponent } from './patient-group/patient-group-form/patient-group-form.component';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
    ,ReactiveFormsModule
    ,FormsModule
    ,DirectivesModule
  ],
  declarations: [PatientGroupComponent, PatientGroupFormComponent],
  providers :[
    PatientGroupService
  ],
  
})
export class PatientModule { }
