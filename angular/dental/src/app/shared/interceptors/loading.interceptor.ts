import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { LoadRequestService } from './../services/load-request.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private _loadRequestService:LoadRequestService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loadRequestService.onLoadRequest.emit(true);
    return next.handle(request)
            .finally(()=>{
              this._loadRequestService.onLoadRequest.emit(false);
            });
  }

}
