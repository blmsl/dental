import { FlashMessagesService } from 'angular2-flash-messages';
import { ActivatedRoute } from '@angular/router';
import { AnamnesisService } from './shared/anamnesis.service';
import { Anamnesis } from './shared/anamnesis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {

  anamnesis:Anamnesis = new Anamnesis();
  private _patient_id:number;
  constructor(
    private _service:AnamnesisService
    ,private _route:ActivatedRoute
    ,private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => {
      this._patient_id = params['id'];
      if (!this._patient_id) return;
      this._service.get(this._patient_id).subscribe(data => this.anamnesis = data);
    })
  }

  save(){
    let lResultService;
    
    if (this.anamnesis.id){
      lResultService = this._service.update(this._patient_id,this.anamnesis)
     
    }else{
      lResultService = this._service.create(this._patient_id,this.anamnesis)
    }
    lResultService.subscribe(res => {
       this._flashMessagesService.show('Anamnesis successfully Updated!', { cssClass: 'alert-success', timeout: 2000 });
    }
    ,(err) => {
      this._flashMessagesService.show(err.statusText, { cssClass: 'alert-danger', timeout: 2000 })
    });
  }

}
