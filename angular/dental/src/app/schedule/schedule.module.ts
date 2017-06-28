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
    
  ],
  declarations: [
    ScheduleComponent
    ,CalendarComponent, ScheduleFormComponent
  ]
})
export class ScheduleModule { }
