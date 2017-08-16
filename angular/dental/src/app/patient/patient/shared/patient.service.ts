import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from './patient';

@Injectable()
export class PatientService{

  private apiUrl = Global.apiURL()+"patients";
  
  constructor(protected _http:HttpClient) {}

  getAll():Observable<Patient[]>{ 
    return this._http.get<Patient[]>(this.apiUrl)
  }

  get(id):Observable<Patient>{
    return this._http.get<Patient>(this.apiUrl + '/' + id)
  }

  create(pPatient){
    return this._http.post(this.apiUrl, {'patient': pPatient})
  }

  update(pPatient){
    return this._http.put(this.apiUrl + '/' + pPatient.id, {'patient': pPatient})
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
