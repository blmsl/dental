import { TreatmentFormComponent } from './../treatment/treatment/treatment-form/treatment-form.component';
import { TreatmentComponent } from './../treatment/treatment/treatment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const TREATMENT_ROUTE: Routes = [
    
];
@NgModule({
    imports:[RouterModule.forChild(TREATMENT_ROUTE)],
    exports:[RouterModule]

})
export class TreatmentRountingModule{}