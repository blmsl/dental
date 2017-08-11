import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { DirectivesModule } from './../directives/directives.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadRequestService } from './services/load-request.service';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
    ,FormsModule
    ,ReactiveFormsModule
    ,DirectivesModule
    ,MaterializeModule
  ],
  declarations: [ErrorMessageComponent],
  exports: [
    ErrorMessageComponent
    ,CommonModule
    ,RouterModule
    ,FormsModule
    ,ReactiveFormsModule
    ,DirectivesModule
    ,MaterializeModule
  ],
  providers: [LoadRequestService]
})
export class SharedModule { }
