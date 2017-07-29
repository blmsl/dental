import { Observable } from 'rxjs/Rx';
import { AUTH_TOKEN } from './../../global/global';
import { Http, Headers, RequestOptionsArgs, Response ,Request } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpClient{

  private _token:string;

  constructor(private _http:Http) { 
		console.log('token : '+localStorage.getItem(AUTH_TOKEN));
    this._token = localStorage.getItem(AUTH_TOKEN);
  }
  
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.request(url,options);
  };
    
  get(url: string, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.get(url,options);
  };
    
  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.post(url,body,options);
  };
    
  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.put(url,options);
  };
    
  delete(url: string, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.delete(url,options);
  };

  patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.patch(url,options);
  };
    
  head(url: string, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.head(url,options);
  };

  options(url: string, options?: RequestOptionsArgs): Observable<Response>{
    options = this.setAuthorizationToken(options);
    return this._http.options(url,options);
  };

  private setAuthorizationToken(options?: RequestOptionsArgs):RequestOptionsArgs{    
    if (!options)
      options = {headers:new Headers()};
    options.headers.append('Authorization',this._token);
    return options;
  }
	
}