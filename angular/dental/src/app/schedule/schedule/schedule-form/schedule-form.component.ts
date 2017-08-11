import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DentistService } from './../../../team/dentist/shared/dentist.service';
import { PatientService } from './../../../patient/patient/shared/patient.service';
import { Dentist } from './../../../team/dentist/shared/dentist';
import { Patient } from './../../../patient/patient/shared/patient';
import { ScheduleService } from './../shared/schedule.service';
import { Schedule } from './../shared/schedule';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

  import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

  schedule:Schedule = new Schedule();
  patients:Array<Patient> = [];
  dentists:Array<Dentist> = [];
  scheduleFormGroup:FormGroup;
  modalActions = new EventEmitter<string|MaterializeAction>();

  @Output("onsave")
  onSave:EventEmitter<Schedule> = new EventEmitter<Schedule>();

  @Output("ondelete")
  onDelete:EventEmitter<Schedule> = new EventEmitter<Schedule>();

  constructor(
    private _service:ScheduleService
    ,private _patientService:PatientService
    ,private _dentistService:DentistService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.scheduleFormGroup = this._formBuilder.group({
      patient_id:[null]
      ,dentist_id:[null]
      ,estimated_time:[null,Validators.required]
      //,schedule_time:[null,Validators.required]
      
    });
    this._patientService.getAll().subscribe(data => this.patients = data);
    this._dentistService.getAll().subscribe(data => this.dentists = data);
    
  }

  createEvent(pEventDate){
    this.schedule = new Schedule();  
    this.schedule.schedule_time = pEventDate;
    this.schedule.estimated_time = 60;
    this.openModal();
  }

  editEvent(pSchedule_id){
    this._service.get(pSchedule_id)
      .subscribe(res => {
        this.schedule = res;
        this.openModal();
      });
  }

  private openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
    
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
  
  save(){
    let lServiceResult;
    if (this.schedule.id)
      lServiceResult = this._service.update(this.schedule);
    else  
      lServiceResult = this._service.create(this.schedule);
    
    lServiceResult.subscribe(
      res => {
        this.closeModal();
        if (this.onSave)
          this.onSave.emit(this.schedule);
      }
      ,err => alert(err));
  }

  deleteSchedule(){
    this._service.delete(this.schedule.id)
      .subscribe(
        res => {
          this.closeModal();
          if (this.onDelete)
            this.onDelete.emit(this.schedule);
        }
        ,err => alert(err));
  }
}