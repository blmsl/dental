import { FlashMessagesService } from 'angular2-flash-messages';
import { PatientGroupService } from './../shared/patient-group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PatientGroup } from './../shared/patient-group';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-group-form',
  templateUrl: './patient-group-form.component.html',
  styleUrls: ['./patient-group-form.component.css']
})
export class PatientGroupFormComponent implements OnInit {

  title:String = "";
  patientGroup:PatientGroup = new PatientGroup();
  patientGroupFormGroup:FormGroup;

  constructor(
    private _route:ActivatedRoute
    ,private _router:Router
    ,private _service:PatientGroupService
    ,private _flashMessagesService: FlashMessagesService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.patientGroupFormGroup = this._formBuilder.group({
      description:[null, Validators.required]
    });
    var id = this._route.params.subscribe(params => {
      var id = params['id'];
      this.title =!id?'Creating':'Editing';
      if (!id)
        return; 
      this._service.get(id)
        .subscribe(
          data => this.patientGroup = data,
          response => {});
    });
  }

  save(){
    let lServiceResult;
    if (this.patientGroup.id)
      lServiceResult = this._service.update(this.patientGroup);
    else
      lServiceResult = this._service.create(this.patientGroup);
    
    lServiceResult.subscribe(res => {      
      this._flashMessagesService.show('Patient Group successfully '+(this.patientGroup.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
      this._router.navigate(['/patient-groups'])
    },
    (err) => {
      this._flashMessagesService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
    });
  }

}