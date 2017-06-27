import { FlashMessagesService } from 'angular2-flash-messages';
import { PatientGroupService } from './../../patient-group/shared/patient-group.service';
import { PatientService } from './../../patient/shared/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientGroup } from './../../patient-group/shared/patient-group';
import { Patient } from './../shared/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  title:String = "";
  patient:Patient = new Patient();
  patientGroups:Array<PatientGroup> = [];
  patientFormGroup:FormGroup;

  constructor(
    private _route:ActivatedRoute
    ,private _router:Router
    ,private _service:PatientService
    ,private _patientGroupService:PatientGroupService
    ,private _flashMessagesService: FlashMessagesService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.patientFormGroup = this._formBuilder.group({
      name:[null, Validators.compose([Validators.required,Validators.minLength(5)])]
      ,cpf:[null,Validators.required]
      ,gender:[null]
      ,date_of_birth:[null]
      ,location_of_birth:[null]
      ,material_status:[null]
      
      ,rg:[null]
      ,observation:[null]
      ,patient_group_id:[null]
      ,address:this._formBuilder.group({
        street:[null, Validators.compose([Validators.required,Validators.minLength(5)])]
        ,neighborhood:[null, Validators.compose([Validators.required,Validators.minLength(5)])]
        ,address_number:[null]
        ,complement:[null]
        ,postal_code:[null, Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(8)])]
      })
    });
    
    this._patientGroupService.getAll().subscribe(data => this.patientGroups = data);

    var id = this._route.params.subscribe(params => {
      var id = params['id'];
      this.title =!id?'Creating':'Editing';
      if (!id)
        return; 
      this._service.get(id)
        .subscribe(
          data => this.patient = data,
          response => {});
    });
  }

  save(){
    let lServiceResult;
    if (this.patient.id)
      lServiceResult = this._service.update(this.patient);
    else
      lServiceResult = this._service.create(this.patient);
    
    lServiceResult.subscribe(res => {      
      this._flashMessagesService.show('Patient successfully '+(this.patient.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
      this._router.navigate(['/patients'])
    },
    (err) => {
      this._flashMessagesService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
    });
  }

}
