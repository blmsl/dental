import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AUTH_TOKEN } from './../../global/global';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private _token:string = '';

  constructor() {
    this._token = localStorage.getItem(AUTH_TOKEN);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let me = this;
    if (!me._token){
      me._token = "";    
    }
    if (this._token){
      request = request.clone({headers: request.headers.set('Authorization', me._token)});
    }
    return next.handle(request);
  }
}
