import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProcedureCategoryComponent } from './procedure-category/procedure-category.component';
import { ProcedureCategoryFormComponent } from './procedure-category/procedure-category-form/procedure-category-form.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ProcedureFormComponent } from './procedure/procedure-form/procedure-form.component';


const CLINIC_ROUTE: Routes = [
    {path:'procedures',component: ProcedureComponent}
    ,{path:'procedures/new',component: ProcedureFormComponent}
    ,{path:'procedures/:id',component: ProcedureFormComponent}

    ,{path:'procedure-categories',component: ProcedureCategoryComponent}
    ,{path:'procedure-categories/new',component: ProcedureCategoryFormComponent}
    ,{path:'procedure-categories/:id',component: ProcedureCategoryFormComponent}
];
@NgModule({
    imports:[RouterModule.forChild(CLINIC_ROUTE)],
    exports:[RouterModule]

})
export class ClinicRountingModule{}