import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { AnamnesisModel } from './../anamnesis-model-form/anamnesis-model';
import { Global } from './../../../global/global';
import { BaseAuthorizedService } from '../../../shared/base-authorized.service';

@Injectable()
export class AnamnesisModelService extends BaseAuthorizedService {

  private apiUrl = Global.apiURL()+"anamnesis_models";

  getAll(){ 
    return this._http.get(this.apiUrl, {'headers':this.headers()})
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id,{'headers':this.headers()})
      .map(res => res.json());
  }

  new_object(){
    return this._http.get(this.apiUrl + '/new',{'headers':this.headers()} )
      .map(res => res.json());
  }

  create(pAnamnesisModel:AnamnesisModel){
    return this._http.post(this.apiUrl, {'anamnesis_model': pAnamnesisModel},{'headers':this.headers()} )
      .map(res => res.json());
  }

  update(pAnamnesisModel:AnamnesisModel){
    return this._http.put(this.apiUrl + '/' + pAnamnesisModel.id, {'anamnesis_model': pAnamnesisModel},{'headers':this.headers()} )
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id,{'headers':this.headers()})
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
