import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PatientGroupFormComponent } from './patient/patient-group/patient-group-form/patient-group-form.component';
import { PatientGroupComponent } from './patient/patient-group/patient-group.component';

const APP_ROUTE: Routes = [
    {path:'patient-groups',component: PatientGroupComponent}
    ,{path:'patient-groups/new',component: PatientGroupFormComponent}
    ,{path:'patient-groups/:id',component: PatientGroupFormComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTE)],
    exports:[RouterModule]

})
export class AppRoutingModule{}