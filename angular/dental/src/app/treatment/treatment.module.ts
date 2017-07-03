import { DirectivesModule } from './../directives/directives.module';
import { RouterModule } from '@angular/router';
import { TreatmentRountingModule } from './treatment.routing.module';
import { TreatmentService } from './treatment/shared/treatment.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentFormComponent } from './treatment/treatment-form/treatment-form.component';

@NgModule({
  imports: [
    CommonModule
    ,TreatmentRountingModule
    ,RouterModule
    ,DirectivesModule
  ],
  declarations: [TreatmentComponent, TreatmentFormComponent]
  ,providers:[TreatmentService]
})
export class TreatmentModule { }
