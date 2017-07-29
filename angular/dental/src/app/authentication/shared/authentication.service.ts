import { Global, AUTH_TOKEN } from './../../global/global';
import { Http } from '@angular/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthenticationService {

  private logged = false;
  onAuthStateChange:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _http:Http) { }

  login(pUserLogin){
    return this._http.post(Global.apiURL()+"authenticate",{'email':pUserLogin.email,'password':pUserLogin.password})
            .map(res => res.json())
            .do((res) => {
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
