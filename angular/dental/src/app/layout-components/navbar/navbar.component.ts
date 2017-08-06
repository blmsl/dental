import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import { AuthenticationService } from './../../authentication/shared/authentication.service';
import { LoadRequestService } from './../../shared/load-request.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _showLoading:boolean = false;

  constructor(
    private _authService:AuthenticationService
    ,private _router:Router
    ,private _loadRequestService:LoadRequestService
    ,private _cdRef:ChangeDetectorRef
  ){

  }

  ngOnInit() {
    this._loadRequestService.onLoadRequestStart.subscribe(
      event => {
        this._showLoading = true;
        this._cdRef.detectChanges();
      });
    this._loadRequestService.onLoadRequestEnd.subscribe(
      event => {
        this._showLoading = false;
        this._cdRef.detectChanges();
      })
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/login'])
  }

  showLoading(){
    return this._showLoading;
  }

}
