
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTE: Routes = [
    {path : 'schedule', loadChildren : 'app/schedule/schedule.module#ScheduleModule'}
    ,{path : 'clinic', loadChildren : 'app/clinic/clinic.module#ClinicModule'}
];
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTE)],
    exports:[RouterModule]
    

})
export class AppRoutingModule{}