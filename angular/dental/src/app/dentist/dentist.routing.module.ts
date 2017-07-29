import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuardService } from './../shared/auth/auth-guard.service';
import { DentistFormComponent } from './dentist/dentist-form/dentist-form.component';
import { DentistComponent } from './dentist/dentist.component';


const DENTIST_ROUTE: Routes = [
    {
        path: '',
        canActivate: [AuthGuardService],
        children: [
            {path:'dentists',component: DentistComponent}
            ,{path:'dentists/new',component: DentistFormComponent}
            ,{path:'dentists/:id',component: DentistFormComponent}
        ]
    },

    
];
@NgModule({
    imports:[RouterModule.forChild(DENTIST_ROUTE)],
    exports:[RouterModule]

})
export class DentistRountingModule{}