import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoadRequestService } from './../load-request.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _loadRequestService:LoadRequestService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadRequestService.onLoadRequestStart.emit(true);

    return next.handle(request)
            .finally(()=>{
              this._loadRequestService.onLoadRequestEnd.emit(true);
            });
  }

}
