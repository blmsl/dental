import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

import { Authentication } from './authentication';
import { Global, AUTH_TOKEN } from './../../global/global';

@Injectable()
export class AuthenticationService {

  private logged = false;
  onAuthStateChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _http:HttpClient) { }

  login(pUserLogin){
    return this._http.post(Global.apiURL()+"authenticate",{'email':pUserLogin.email,'password':pUserLogin.password})
            .do((res:any) => {
              localStorage.setItem(AUTH_TOKEN,res.auth_token);
              this.logged = true;
              this.onAuthStateChange.emit(true);
            })
  }

  isLogged(){
    return this.logged;
  }
  
  logout(){
    localStorage.removeItem(AUTH_TOKEN);
    this.onAuthStateChange.emit(false);
    this.logged = false;
  }

}
