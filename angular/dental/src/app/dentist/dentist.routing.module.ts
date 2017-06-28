import { DentistComponent } from './dentist/dentist.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


const DENTIST_ROUTE: Routes = [
    {path:'dentists',component: DentistComponent}
    
];
@NgModule({
    imports:[RouterModule.forChild(DENTIST_ROUTE)],
    exports:[RouterModule]

})
export class DentistRountingModule{}