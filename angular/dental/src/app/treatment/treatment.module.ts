import { UtilsModule } from './../utils/utils.module';
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './../directives/directives.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreatmentService } from './treatment/shared/treatment.service';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentFormComponent } from './treatment/treatment-form/treatment-form.component';

@NgModule({
  imports: [
    CommonModule
    ,ReactiveFormsModule
    ,RouterModule

    ,MaterializeModule
    ,DirectivesModule
    ,UtilsModule
  ],
  declarations: [TreatmentComponent, TreatmentFormComponent]
  ,providers:[TreatmentService]
})
export class TreatmentModule { }
