
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { LoadRequestService } from './../../shared/services/load-request.service';
import { AuthenticationService } from './../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;
  private _showLoading:boolean = false;
  

  constructor(
    private _service:AuthenticationService
    ,private _formBuilder:FormBuilder
    ,private _router:Router
    ,private _loadRequestService:LoadRequestService
    ,private _cdRef:ChangeDetectorRef
  ) { 
  
  }

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      email:['example@mail.com',Validators.nullValidator]
      ,password:['123123' ,Validators.nullValidator]
    });
  
    
     this._loadRequestService.onLoadRequest.subscribe(
      event => {
        this._showLoading = event;
      });
    
  }

  onDestroy(){
    
  }

  login(){
    this._service.login(this.loginFormGroup.value)
      .subscribe(res => this._router.navigate(['/']))
  }

  showLoading(){
    return this._showLoading;
  }

}


