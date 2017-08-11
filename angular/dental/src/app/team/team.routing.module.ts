import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuardService } from './../shared/guards/auth-guard.service';
import { DentistFormComponent } from './dentist/dentist-form/dentist-form.component';
import { DentistComponent } from './dentist/dentist.component';


const TEAM_ROUTE: Routes = [
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
    imports:[RouterModule.forChild(TEAM_ROUTE)],
    exports:[RouterModule]

})
export class TeamRountingModule{}