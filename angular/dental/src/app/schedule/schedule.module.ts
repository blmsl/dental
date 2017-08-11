import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';

import { ScheduleService } from './schedule/shared/schedule.service';
import { ScheduleRountingModule } from './schedule.routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { ScheduleFormComponent } from './schedule/schedule-form/schedule-form.component';

@NgModule({
  imports: [
  
    ScheduleRountingModule
    ,SharedModule  
  ],
  declarations: [
    ScheduleComponent
    ,CalendarComponent, ScheduleFormComponent
  ],
  providers:[ScheduleService]
})
export class ScheduleModule { }
