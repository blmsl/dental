import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { ProcedureFormComponent } from './clinic/procedure/procedure-form/procedure-form/procedure-form.component';
import { ProcedureComponent } from './clinic/procedure/procedure.component';
import { ProcedureCategoryFormComponent } from './clinic/procedure-category/procedure-category-form/procedure-category-form.component';
import { ProcedureCategoryComponent } from './clinic/procedure-category/procedure-category.component';


export const APP_ROUTE: Routes = [
    {path:'procedure-categories',component: ProcedureCategoryComponent}
    ,{path:'procedure-categories/new',component: ProcedureCategoryFormComponent}
    ,{path:'procedure-categories/:id',component: ProcedureCategoryFormComponent}

    ,{path:'procedures',component: ProcedureComponent}
    ,{path:'procedures/new',component: ProcedureFormComponent}
    ,{path:'procedures/:id',component: ProcedureFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);