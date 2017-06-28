
import { ScheduleRountingModule } from './schedule.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';

import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';




@NgModule({
  imports: [
    CommonModule
    ,ScheduleRountingModule
    
  ],
  declarations: [
    ScheduleComponent
    ,CalendarComponent
  ]
})
export class ScheduleModule { }
