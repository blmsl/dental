import { ProcedureCategoryComponent } from './../clinic/procedure-category/procedure-category.component';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
    ,MaterializeModule
    ,RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidenavComponent
    
  ],
  exports:[
    NavbarComponent
    ,SidenavComponent
  ]
})
export class LayoutComponentsModule { }
