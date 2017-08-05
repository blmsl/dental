import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PatientGroup } from './patient-group';

@Injectable()
export class PatientGroupService {

  private apiUrl = Global.apiURL()+'patient_groups';

  constructor(private _http:HttpClient) { }

  getAll():Observable<Array<PatientGroup>>{ 
    return this._http.get(this.apiUrl)
      //.map(res => res.json());
  }

  get(id):Observable<PatientGroup>{
    return this._http.get(this.apiUrl + '/' + id)
      //.map(res => res.json());
  }

  create(pPatientGroup){
    return this._http.post(this.apiUrl, {'patient_group': pPatientGroup})
      //.map(res => res.json());
  }

  update(pPatientGroup){
    return this._http.put(this.apiUrl + '/' + pPatientGroup.id, {'patient_group': pPatientGroup})
      //.map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      //.map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
