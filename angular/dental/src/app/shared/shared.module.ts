
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'angular2-materialize';
import { DirectivesModule } from './../directives/directives.module';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LoadRequestService } from './services/load-request.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

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
  providers: [
    
  ]
})
export class SharedModule { 
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoadRequestService
        ,{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
        ,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
      ]
    };
  }

}
