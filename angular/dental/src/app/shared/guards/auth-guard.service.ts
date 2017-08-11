import { AuthenticationService } from './../../authentication/shared/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private _authService:AuthenticationService
    ,private _router:Router
    ,private _route:ActivatedRoute
  ){}
  
  canActivate() {
    if (!this._authService.isLogged()){
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

}