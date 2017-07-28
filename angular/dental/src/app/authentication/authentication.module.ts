import { AuthenticationRountingModule } from './authentication.routing,module';
import { UtilsModule } from './../utils/utils.module';
import { DirectivesModule } from './../directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
    ,ReactiveFormsModule
    ,DirectivesModule
    ,UtilsModule
    ,AuthenticationRountingModule
  ],
  declarations: [LoginComponent]
  ,providers:[AuthenticationService]
})
export class AuthenticationModule { }
