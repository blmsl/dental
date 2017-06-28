import { DentistService } from './dentist/shared/dentist.service';
import { DentistRountingModule } from './dentist.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentistComponent } from './dentist/dentist.component';

@NgModule({
  imports: [
    CommonModule
    ,DentistRountingModule
  ],
  declarations: [DentistComponent]
  ,providers:[DentistService]
})
export class DentistModule { }
