import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { PlanService } from './clinic/plan/shared/plan.service';
import { ProcedureService } from './clinic/procedure/shared/procedure.service';
import { PatientModule } from './patient/patient.module';

import { DentistService } from './team/dentist/shared/dentist.service';
import { PatientService } from './patient/patient/shared/patient.service';
import { PatientGroupService } from './clinic/patient-group/shared/patient-group.service';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { DirectivesModule } from './directives/directives.module';

import { NavbarComponent } from './layout-components/navbar/navbar.component';
import { SidenavComponent } from './layout-components/sidenav/sidenav.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AnamnesisModelModule } from './anamnesis-model/anamnesis-model.module';
import { TreatmentModule } from './treatment/treatment.module';
import { ProcedureCategoryService } from './clinic/procedure-category/shared/procedure-category.service';
import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { MenuService } from './menu/menu.service';
import { InterceptorsModule } from './shared/interceptors/interceptors.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    InterceptorsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    LayoutComponentsModule,
    PatientModule,
    
    TreatmentModule,
    AnamnesisModelModule,
    
    FlashMessagesModule,
    AuthenticationModule,
  ],
  exports: [
    DirectivesModule,
    ReactiveFormsModule
  ],
  providers: [
    
    MenuService,
    AuthGuardService
    ,PatientGroupService
    ,PatientService
    ,DentistService
    ,ProcedureCategoryService
    ,ProcedureService
    ,PlanService
    ,DentistService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
