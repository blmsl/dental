import { AuthGuardService } from './shared/auth/auth-guard.service';
import { DirectivesModule } from './directives/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './layout-components/navbar/navbar.component';
import { SidenavComponent } from './layout-components/sidenav/sidenav.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AnamnesisModelModule } from './anamnesis-model/anamnesis-model.module';
import { TreatmentModule } from './treatment/treatment.module';
import { DentistModule } from './dentist/dentist.module';
import { ScheduleModule } from './schedule/schedule.module';
import { PatientModule } from './patient/patient.module';
import { ClinicModule } from './clinic/clinic.module';
import { ProcedureCategoryService } from './clinic/procedure-category/shared/procedure-category.service';
import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { MenuService } from './menu/menu.service';
import { UtilsModule } from './utils/utils.module';
import { InterceptorsModule } from './shared/interceptors/interceptors.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadRequestService } from './shared/load-request.service';

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
    LayoutComponentsModule,
    ClinicModule,
    PatientModule,
    DentistModule,
    ScheduleModule,
    TreatmentModule,
    AnamnesisModelModule,
    UtilsModule,
    FlashMessagesModule,
    AuthenticationModule,
  ],
  exports: [
    DirectivesModule,
    UtilsModule,
    ReactiveFormsModule
  ],
  providers: [
    MenuService,
    AuthGuardService,
    LoadRequestService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
