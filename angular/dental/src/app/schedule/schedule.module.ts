import { ScheduleRountingModule } from './schedule.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  imports: [
    CommonModule
    ,ScheduleRountingModule
  ],
  declarations: [ScheduleComponent]
})
export class ScheduleModule { }
