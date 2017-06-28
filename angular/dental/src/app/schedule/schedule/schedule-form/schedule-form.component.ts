import { Component, OnInit, EventEmitter } from '@angular/core';

  import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {

  modalActions = new EventEmitter<string|MaterializeAction>();
  constructor() { }

  ngOnInit() {
    
  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }

  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
  
}
