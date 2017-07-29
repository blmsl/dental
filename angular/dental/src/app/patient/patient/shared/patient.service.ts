import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';
import { BaseAuthorizedService } from '../../../shared/auth/base-authorized.service';

@Injectable()
export class PatientService extends BaseAuthorizedService{

  private apiUrl = Global.apiURL()+"patients";

  getAll(){ 
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  create(pPatient){
    return this._http.post(this.apiUrl, {'patient': pPatient})
      .map(res => res.json());
  }

  update(pPatient){
    return this._http.put(this.apiUrl + '/' + pPatient.id, {'patient': pPatient})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
