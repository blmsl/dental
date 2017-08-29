import { Observable } from 'rxjs/Rx';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute, Router } from '@angular/router';
import { DentistService } from './../shared/dentist.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dentist } from './../shared/dentist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dentist-form',
  templateUrl: './dentist-form.component.html',
  styleUrls: ['./dentist-form.component.css']
})
export class DentistFormComponent implements OnInit {

  title:string = "";
  dentist:Dentist = new Dentist();
  dentistFormGroup:FormGroup;

  constructor(
    private _route:ActivatedRoute
    ,private _router:Router
    ,private _service:DentistService
    ,private _flashMessageService:FlashMessagesService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {

    this.dentistFormGroup = this._formBuilder.group({
      dentist_name:[null,Validators.compose([Validators.required,Validators.minLength(10)])]
      ,cpf:[null,Validators.required]
      ,cro:[null,Validators.required]
      ,gender:[null]
      ,date_of_birth:[null]
    });

    this._route.params.subscribe(params => {
      let id = params['id'];
      if (!id) return;

      this._service.get(id).subscribe(data => this.dentist = data);
    });
  }

  save(){
    let lServiceResult;
    if (this.dentist.id)
      lServiceResult = this._service.update(this.dentist);
    else
      lServiceResult = this._service.create(this.dentist);
    
    lServiceResult.subscribe(
      res => {
        this._flashMessageService.show('Dentist successfully '+(this.dentist.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
        this._router.navigate(['/dentists'])
      }
      ,err => this._flashMessageService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
      )
  }

}
