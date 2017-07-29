import { HttpClient } from './http-client.service';

import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import { AUTH_TOKEN } from './../../global/global';

@Injectable()
export abstract class BaseAuthorizedService{
	
  constructor(protected _http:HttpClient) { 
		
	}
	
}