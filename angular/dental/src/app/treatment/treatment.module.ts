import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { TreatmentService } from './treatment/shared/treatment.service';
import { TreatmentComponent } from './treatment/treatment.component';
import { TreatmentFormComponent } from './treatment/treatment-form/treatment-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TreatmentComponent, TreatmentFormComponent]
  ,providers:[TreatmentService]
})
export class TreatmentModule { }
