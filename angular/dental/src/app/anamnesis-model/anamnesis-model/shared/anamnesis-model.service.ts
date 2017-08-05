import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AnamnesisModel } from './../anamnesis-model-form/anamnesis-model';
import { AnamnesisModelItemList } from './../anamnesis-model-item-list';
import { Global } from './../../../global/global';

@Injectable()
export class AnamnesisModelService {

  private apiUrl = Global.apiURL()+"anamnesis_models";
  constructor(protected _http:HttpClient) {}

  getAll():Observable<AnamnesisModelItemList[]>{ 
    return this._http.get(this.apiUrl)
      //.map(res => res.json());
  }

  get(id):Observable<AnamnesisModel>{
    return this._http.get(this.apiUrl + '/' + id)
      //.map(res => res.json());
  }

  new_object():Observable<AnamnesisModel>{
    return this._http.get(this.apiUrl + '/new')
      //.map(res => res.json());
  }

  create(pAnamnesisModel:AnamnesisModel){
    return this._http.post(this.apiUrl, {'anamnesis_model': pAnamnesisModel} )
      //.map(res => res.json());
  }

  update(pAnamnesisModel:AnamnesisModel){
    return this._http.put(this.apiUrl + '/' + pAnamnesisModel.id, {'anamnesis_model': pAnamnesisModel} )
      //.map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      //.map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
