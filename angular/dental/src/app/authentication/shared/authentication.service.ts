import { Global } from './../../global/global';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
  private logged = false;

  constructor(private _http:Http) { }

  login(pUserLogin){
    return this._http.post(Global.apiURL()+"authenticate",{'email':pUserLogin.email,'password':pUserLogin.password})
            .map(res => res.json())
            .do((res) => {
              localStorage.setItem('auth_token',res.auth_token);
              this.logged = true;
            })
  }

  isLogged(){
    return this.logged;
  }
  
  logout(){

  }

}
