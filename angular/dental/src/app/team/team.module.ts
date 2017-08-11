
import { SharedModule } from './../shared/shared.module';
import { DentistService } from './dentist/shared/dentist.service';

import { NgModule } from '@angular/core';

import { DentistComponent } from './dentist/dentist.component';
import { DentistFormComponent } from './dentist/dentist-form/dentist-form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DentistComponent, DentistFormComponent]
  ,providers:[DentistService]
})
export class TeamModule { }
