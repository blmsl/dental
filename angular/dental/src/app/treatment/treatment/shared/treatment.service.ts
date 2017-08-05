import { Global } from './../../../global/global';
import { Treatment } from './treatment';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TreatmentService {

  constructor(protected _http:HttpClient) {}

  getAllFromPatient(pPatientId:number):Observable<Treatment[]>{ 
    return this._http.get(this.apiURL(pPatientId))
      //.map(res => res.json());
  }

  get(pPatientId:number,pTreatmentId:number):Observable<Treatment>{
    return this._http.get(this.apiURL(pPatientId) + '/' + pTreatmentId)
      //.map(res => res.json());
  }

  create(pPatientId:number,pTreatment:Treatment){
    return this._http.post(this.apiURL(pPatientId), {'treatment': pTreatment})
      //.map(res => res.json());
  }

  update(pPatientId:number,pTreatment:Treatment){
    return this._http.put(this.apiURL(pPatientId) + '/' + pTreatment.id, {'treatment': pTreatment})
      //.map(res => res.json());
  }

  delete(pPatientId:number,pTreatmentId:number){
    return this._http.delete(this.apiURL(pPatientId)+ '/' + pTreatmentId)
      //.map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  private apiURL(pPatientId:number):string{
    return Global.apiURL()+"patients/"+pPatientId+"/treatments";
  } 

}
