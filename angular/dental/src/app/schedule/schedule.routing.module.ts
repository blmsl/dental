import { AuthGuardService } from './../shared/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ScheduleComponent } from './schedule/schedule.component';

const SCHEDULE_ROUTE: Routes = [
    {path:'schedule',component: ScheduleComponent,canActivate: [AuthGuardService]}    
];
@NgModule({
    imports:[RouterModule.forChild(SCHEDULE_ROUTE)],
    exports:[RouterModule]
})

export class ScheduleRountingModule{}