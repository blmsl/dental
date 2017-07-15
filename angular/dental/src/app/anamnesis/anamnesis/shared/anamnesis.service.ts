import { Anamnesis } from './anamnesis';
import { Global } from './../../../global/global';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnamnesisService {

  constructor(private _http:Http) { }

  get(pPatientId:number){
    return this._http.get(this.apiURL(pPatientId))
      .map(res => res.json());
  }

  create(pPatientId:number,pAnamnesis:Anamnesis){
    return this._http.post(this.apiURL(pPatientId), {'anamnesis': pAnamnesis})
      .map(res => res.json());
  }

  update(pPatientId:number,pAnamnesis:Anamnesis){
    return this._http.put(this.apiURL(pPatientId), {'anamnesis': pAnamnesis})
      .map(res => res.json());
  }

  private apiURL(pPatientId:number):string{
    return Global.apiURL()+"patients/"+pPatientId+"/anamneses";
  } 

}
