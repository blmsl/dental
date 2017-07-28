import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';

const AUTHENTICATION_ROUTE: Routes = [
    {path:'login',component: LoginComponent}
  
];
@NgModule({
    imports:[RouterModule.forChild(AUTHENTICATION_ROUTE)],
    exports:[RouterModule]

})
export class AuthenticationRountingModule{}