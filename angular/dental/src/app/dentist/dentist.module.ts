import { RouterModule } from '@angular/router';
import { DirectivesModule } from './../directives/directives.module';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './../utils/utils.module';
import { DentistService } from './dentist/shared/dentist.service';
import { DentistRountingModule } from './dentist.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentistComponent } from './dentist/dentist.component';
import { DentistFormComponent } from './dentist/dentist-form/dentist-form.component';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
    ,DentistRountingModule
    ,FormsModule
    ,ReactiveFormsModule
    
    ,DirectivesModule
    ,UtilsModule
    ,MaterializeModule
  ],
  declarations: [DentistComponent, DentistFormComponent]
  ,providers:[DentistService]
})
export class DentistModule { }
