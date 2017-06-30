import { DirectivesModule } from './../directives/directives.module';
import { UtilsModule } from './../utils/utils.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleService } from './schedule/shared/schedule.service';
import { MaterializeModule } from 'angular2-materialize';

import { ScheduleRountingModule } from './schedule.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';

import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { ScheduleFormComponent } from './schedule/schedule-form/schedule-form.component';




@NgModule({
  imports: [
    CommonModule
    ,ScheduleRountingModule
    ,MaterializeModule
    ,FormsModule
    ,ReactiveFormsModule
    ,UtilsModule
    ,DirectivesModule
  ],
  declarations: [
    ScheduleComponent
    ,CalendarComponent, ScheduleFormComponent
  ],
  providers:[ScheduleService]
})
export class ScheduleModule { }
