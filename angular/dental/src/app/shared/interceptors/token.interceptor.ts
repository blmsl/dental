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
