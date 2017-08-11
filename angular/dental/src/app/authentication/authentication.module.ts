import { AuthenticationRountingModule } from './authentication.routing,module';
import { SharedModule } from './../shared/shared.module';
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
    ,SharedModule
    ,AuthenticationRountingModule
  ],
  declarations: [LoginComponent]
  ,providers:[AuthenticationService]
})
export class AuthenticationModule { }
