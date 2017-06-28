import { FlashMessagesService } from 'angular2-flash-messages';
import { DentistService } from './shared/dentist.service';
import { Dentist } from './shared/dentist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dentist',
  templateUrl: './dentist.component.html',
  styleUrls: ['./dentist.component.css']
})
export class DentistComponent implements OnInit {

  dentists:Array<Dentist> = [];

  constructor(
    private _service:DentistService
    ,private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this._service.getAll().subscribe(data => this.dentists = data);
  }

  delete(pDentist:Dentist){
    this._service.delete(pDentist.id)
      .subscribe(
        res => {
          let lIndex = this.dentists.indexOf(pDentist);
          this.dentists.splice(lIndex,1);
          this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
        }
      );
  }

}
