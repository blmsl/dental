import { AuthGuardService } from './../shared/auth/auth-guard.service';
import { PatientLayoutComponent } from './patient/patient-layout/patient-layout.component';
import { AnamnesisComponent } from './../anamnesis/anamnesis/anamnesis.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PatientGroupFormComponent } from './patient-group/patient-group-form/patient-group-form.component';
import { PatientGroupComponent } from './patient-group/patient-group.component';
import { PatientComponent } from './patient/patient.component';
import { TreatmentFormComponent } from './../treatment/treatment/treatment-form/treatment-form.component';
import { TreatmentComponent } from './../treatment/treatment/treatment.component';
import { PatientDashboardComponent } from './patient/patient-dashboard/patient-dashboard.component';
import { PatientShowDetailComponent } from './patient/patient-show-detail/patient-show-detail.component';
import { PatientFormComponent } from './patient/patient-form/patient-form.component';

const PATIENT_ROUTE: Routes = [
     {
        path: '',
        canActivate: [AuthGuardService],
        children: [
            {path:'patients',component: PatientComponent}
            ,{path:'patients/new',component: PatientFormComponent}
            ,{path:'patients/:id',component: PatientLayoutComponent
                ,children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
                    ,{ path: 'dashboard', component: PatientDashboardComponent }
                    ,{ path: 'edit', component: PatientFormComponent }

                    ,{ path: 'treatments', component:TreatmentComponent }
                    ,{ path: 'treatments/new', component:TreatmentFormComponent }
                    ,{ path: 'treatments/:id', component:TreatmentFormComponent }

                    ,{ path: 'anamnesis', component:AnamnesisComponent }
                    
                ]
            }

            ,{path:'patient-groups',component: PatientGroupComponent}
            ,{path:'patient-groups/new',component: PatientGroupFormComponent}
            ,{path:'patient-groups/:id',component: PatientGroupFormComponent}
            
        ]
    },

    
    
];
@NgModule({
    imports:[RouterModule.forChild(PATIENT_ROUTE)],
    exports:[RouterModule]

})
export class PatientRountingModule{}