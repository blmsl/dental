import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ProcedureService } from './shared/procedure.service';
import { Procedure } from './shared/procedure';


@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.css']
})
export class ProcedureComponent implements OnInit {

  procedures:Array<Procedure> = [];
  constructor(
    private _service:ProcedureService
    ,private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {        
    this._service.getAll()
      .subscribe(data => this.procedures = data);
  }

  delete(pProcedure:Procedure){
    this._service.delete(pProcedure.id).subscribe(
      res => {
        var index = this.procedures.indexOf(pProcedure);    
        this.procedures.splice(index, 1);
        this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
      }
    )   
  }

}
