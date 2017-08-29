import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import { AuthenticationService } from './../../authentication/shared/authentication.service';
import { LoadRequestService } from './../../shared/services/load-request.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _showLoading:boolean = false;
  private _subsOnLoadRequest:Subscription;
  
  constructor(
    private _authService:AuthenticationService
    ,private _router:Router
    ,private _loadRequestService:LoadRequestService
    ,private _cdRef:ChangeDetectorRef
  ){

  }

  ngOnInit() {
    this._subsOnLoadRequest = this._loadRequestService.onLoadRequest.subscribe(
      event => {
        this._showLoading = event;
        this._cdRef.detectChanges();
      });
  }

  ngOnDestroy(){
    this._subsOnLoadRequest.unsubscribe();
  }

  logout(){
    this._authService.logout();
    this._router.navigate(['/login'])
  }

  showLoading(){
    return this._showLoading;
  }

}
