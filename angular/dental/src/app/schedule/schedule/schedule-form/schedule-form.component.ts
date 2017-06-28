import { ScheduleService } from './../shared/schedule.service';
import { Schedule } from './../shared/schedule';
import { Component, OnInit, EventEmitter } from '@angular/core';

  import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

  schedule:Schedule = new Schedule();
  modalActions = new EventEmitter<string|MaterializeAction>();

  constructor(private _service:ScheduleService) { }

  ngOnInit() {}

  createEvent(pEventDate){
    this.schedule = new Schedule();  
    this.schedule.schedule_time = pEventDate;
    this.openModal();
  }

  editEvent(pSchedule_id){
    this._service.get(pSchedule_id)
      .subscribe(res => {
        this.schedule = res;
        this.openModal();
      });
  }

  openModal() {
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
      res => this.closeModal()
      ,err => alert(err));
  }
}
