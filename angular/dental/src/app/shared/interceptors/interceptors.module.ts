import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AUTH_TOKEN } from './../../global/global';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private _token:string = '';

  constructor() {
    console.log('criando interceptador');
    this._token = localStorage.getItem(AUTH_TOKEN);
   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('foi interceptado');
    let me = this;
    request = request.clone({headers: request.headers.set('Authorization', me._token)});
    return next.handle(request);
  }
}


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
