
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTE: Routes = [
    
];
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTE)],
    exports:[RouterModule]
    

})
export class AppRoutingModule{}