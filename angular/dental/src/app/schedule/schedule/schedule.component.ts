import { ScheduleService } from './shared/schedule.service';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  @ViewChild('scheduleform') 
  scheduleForm:ScheduleFormComponent;

  calendarOptions:any = {};
  
  constructor(private _service:ScheduleService) { }

  ngOnInit() {
    this.carregarCalendario(); 
    this.searchEvents();
  }

  searchEvents(){
    this._service.getAll()
      .subscribe(data => {
          this.calendarOptions.events = data;
          this.myCalendar.fullCalendar('removeEvents');
          this.myCalendar.fullCalendar('addEventSource', data);   
    });   
  }

  carregarCalendario(){
    var me = this;
    this.calendarOptions = {
      buttonText:{
          today:    'Hoje',
          month:    'Mês',
          week:     'Semana',
          day:      'Dia',
          list:     'lista'
      },
      minTime: "08:00:00",
      maxTime: "18:00:00",
      businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [ 3, 4 ], // Monday - Thursday
        start: '10:00', // a start time (10am in this example)
        end: '18:00', // an end time (6pm in this example)
      },
      height: 'auto',
      timeFormat: 'H:mm',
      timezone: 'local',
      slotLabelFormat : 'H:mm',
      columnFormat:'ddd DD/MM',
      header: {
        title :'test',
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      locale: 'pt',
      allDayText:'Dia todo',
      defaultView:'agendaWeek',
      fixedWeekCount : false,
      defaultDate: new Date(),
      editable: true,
      //eventLimit: true, // allow "more" link when too many events

      events: []
      ,dayClick: function (date, jsEvent, view) {
        //alert(date._d);
        me.scheduleForm.createEvent(date._d);
          // console.log('clicou no dia');
          //   const modalRef = me.modalService.open(ScheduleFormComponent);  
          //   modalRef.componentInstance.novo(date._d);
          //   modalRef.result
          //     .then(
          //       result =>  $('#mycal').fullCalendar('addEventSource', [result])
          //       , (reason) => {}
          //       )
      }
      ,eventResize:function(event, delta, revertFunc) {
        me._service.get(event.id)
          .subscribe(res => {
            let lSchedule = res;

            // a diferenca   entre as datas é em milisegundos
            // o tempo estimado(estimated_time) é em minutos
            // sendo assim, para transformar os milisegundos em minutos
            // é necessário dividir por 60.000
            lSchedule.estimated_time = (event.end._d - event.start._d)/60000; 
            me._service.update(lSchedule).subscribe(null);         
        });
          // me.service.get(event.id)
          //   .subscribe(
          //     schedule => {
          //       console.log(schedule);
          //       // a diferenca   entre as datas é em milisegundos
          //       // o tempo estimado(estimated_time) é em minutos
          //       // sendo assim, para transformar os milisegundos em minutos
          //       // é necessário dividir por 60.000
          //       schedule.estimated_time = (event.end._d - event.start._d)/60000; 
          //       me.service.update(schedule)
          //         .subscribe(null);  
          //       console.log(schedule);
          //     }
          //   );
      }
      ,eventDrop:function(event, delta, revertFunc) {
        me._service.get(event.id)
          .subscribe(res => {
            let lSchedule = res;
            lSchedule.schedule_time = event.start._d;      
            me._service.update(lSchedule).subscribe(null);         
        });
      }
      ,eventClick:function(event) {
          me.scheduleForm.editEvent(event.id);
          // const modalRef = me.modalService.open(ScheduleFormComponent);  
          // modalRef.componentInstance.alterar(event.id);
          // modalRef.result
          //   .then(
          //     (result) => {
          //       console.log(result); 
          //       $('#mycal').fullCalendar('removeEvents',event.id);
          //       if (result  != 'deletou')
          //         $('#mycal').fullCalendar('addEventSource', [result]);
          //     }
          //     , (reason) => {})


      }
    }
  }

  onsave(event){
    this.searchEvents();
  }

}
