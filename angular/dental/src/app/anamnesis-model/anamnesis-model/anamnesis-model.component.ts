import { FlashMessagesService } from 'angular2-flash-messages';
import { AnamnesisModelService } from './shared/anamnesis-model.service';
import { AnamnesisModelItemList } from './anamnesis-model-item-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamnesis-model',
  templateUrl: './anamnesis-model.component.html',
  styleUrls: ['./anamnesis-model.component.css']
})
export class AnamnesisModelComponent implements OnInit {

  anamnesisModels:Array<AnamnesisModelItemList> = [];

  constructor(
    private _service:AnamnesisModelService
    ,private _flashMessagesService:FlashMessagesService
  ) { }

  ngOnInit() {
    this._service.getAll().subscribe( data => this.anamnesisModels = data);
  }

  delete(pAnamnesisModelItemList:AnamnesisModelItemList){
    this._service.delete(pAnamnesisModelItemList.id)
      .subscribe(res => {
        let index = this.anamnesisModels.indexOf(pAnamnesisModelItemList);
        this.anamnesisModels.splice(index,1);
        this._flashMessagesService.show('Record successfully deleted!', { cssClass: 'alert-success', timeout: 1000 })
      });
  }

}
