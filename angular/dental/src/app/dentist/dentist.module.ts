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
})
export class DentistModule { }
