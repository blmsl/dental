import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  calendarOptions:Object = {
        
        fixedWeekCount : false,
        defaultDate: '2017-06-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2017-06-01'
          },
          {
            title: 'Long Event',
            start: '2017-06-07',
            end: '2017-06-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-06-06T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-06-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-06-11',
            end: '2017-06-13'
          },
          {
            title: 'Meeting',
            start: '2017-06-12T10:30:00',
            end: '2017-06-12T12:30:00'
          },
          {
            title: 'Lunch',
            start: '2017-06-12T12:00:00'
          },
          {
            title: 'Meeting',
            start: '2017-06-12T14:30:00'
          },
          {
            title: 'Happy Hour',
            start: '2017-06-12T17:30:00'
          },
          {
            title: 'Dinner',
            start: '2017-06-12T20:00:00'
          },
          {
            title: 'Birthday Party',
            start: '2017-06-13T07:00:00'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-06-28'
          }
        ]
  };
  
  constructor() { }

  ngOnInit() {
  }

}
