import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers :[ 
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  declarations : [],
  exports :[]
})
export class InterceptorsModule { }
