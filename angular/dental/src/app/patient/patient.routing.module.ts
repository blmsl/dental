import { PatientFormComponent } from './patient/patient-form/patient-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PatientGroupFormComponent } from './patient-group/patient-group-form/patient-group-form.component';
import { PatientGroupComponent } from './patient-group/patient-group.component';
import { PatientComponent } from './patient/patient.component';

const PATIENT_ROUTE: Routes = [
    {path:'patients',component: PatientComponent}
    ,{path:'patients/new',component: PatientFormComponent}
    ,{path:'patients/:id',component: PatientFormComponent}

    ,{path:'patient-groups',component: PatientGroupComponent}
    ,{path:'patient-groups/new',component: PatientGroupFormComponent}
    ,{path:'patient-groups/:id',component: PatientGroupFormComponent}
    
];
@NgModule({
    imports:[RouterModule.forChild(PATIENT_ROUTE)],
    exports:[RouterModule]

})
export class PatientRountingModule{}