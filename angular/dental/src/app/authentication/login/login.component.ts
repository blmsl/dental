import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup;

  constructor(
    private _service:AuthenticationService
    ,private _formBuilder:FormBuilder
    ,private _router:Router
  ) { 
  
  }

  ngOnInit() {
  this.loginFormGroup = this._formBuilder.group({
      email:['example@mail.com',Validators.nullValidator]
      ,password:['123123' ,Validators.nullValidator]
    })
  }

  login(){
    console.log(this.loginFormGroup.value)
    this._service.login(this.loginFormGroup.value)
      .subscribe(
        res => {
          this._router.navigate(['/'])
          console.log(res);
        }
      ,err => {})
  }

}


