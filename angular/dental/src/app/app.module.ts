import { ClinicModule } from './clinic/clinic.module';
import { ProcedureCategoryService } from './clinic/procedure-category/shared/procedure-category.service';
import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { MenuService } from './menu/menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout-components/navbar/navbar.component';
import { SidenavComponent } from './layout-components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    ,MaterializeModule
    ,LayoutComponentsModule
    ,ClinicModule
    ,routing
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
