import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../authentication/shared/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService:AuthenticationService
    ,private _router:Router
  ){ }

  ngOnInit() {
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/login'])
  }

}
