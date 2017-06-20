import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { ProcedureCategoryComponent } from './clinic/procedure-category/procedure-category.component';


export const APP_ROUTE: Routes = [
    {
        path:'procedure-categories',component: ProcedureCategoryComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);