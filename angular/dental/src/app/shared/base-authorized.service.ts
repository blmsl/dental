
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { AUTH_TOKEN } from './../global/global';

@Injectable()
export abstract class BaseAuthorizedService{
	
	private _headers = new Headers();

  constructor(protected _http:Http) { 
		console.log('token : '+localStorage.getItem(AUTH_TOKEN));
    this._headers.append('Authorization',localStorage.getItem(AUTH_TOKEN));
	}
	
	headers(){
		return this._headers;
	}
}