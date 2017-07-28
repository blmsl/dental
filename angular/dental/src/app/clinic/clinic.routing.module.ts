import { AuthGuardService } from './../shared/auth-guard.service';
import { PlanFormComponent } from './plan/plan-form/plan-form.component';
import { PlanComponent } from './plan/plan.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ProcedureCategoryComponent } from './procedure-category/procedure-category.component';
import { ProcedureCategoryFormComponent } from './procedure-category/procedure-category-form/procedure-category-form.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { ProcedureFormComponent } from './procedure/procedure-form/procedure-form.component';


const CLINIC_ROUTE: Routes = [

    {
        path: '',
        canActivate: [AuthGuardService],
        children: [
            {path:'procedures',component: ProcedureComponent}
            ,{path:'procedures/new',component: ProcedureFormComponent}
            ,{path:'procedures/:id',component: ProcedureFormComponent}

            ,{path:'procedure-categories',component: ProcedureCategoryComponent}
            ,{path:'procedure-categories/new',component: ProcedureCategoryFormComponent}
            ,{path:'procedure-categories/:id',component: ProcedureCategoryFormComponent}

            ,{path:'plans',component: PlanComponent}
            ,{path:'plans/new',component: PlanFormComponent}
            ,{path:'plans/:id',component: PlanFormComponent}
        ]
    },

    
];
@NgModule({
    imports:[RouterModule.forChild(CLINIC_ROUTE)],
    exports:[RouterModule]

})
export class ClinicRountingModule{}