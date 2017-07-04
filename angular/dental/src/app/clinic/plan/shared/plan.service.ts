import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanService {

  private apiUrl = Global.apiURL()+"plans";

  constructor(private _http:Http) { }

  getAll(){ 
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  create(pPlan){
    return this._http.post(this.apiUrl, {'plan': pPlan})
      .map(res => res.json());
  }

  update(pPlan){
    return this._http.put(this.apiUrl + '/' + pPlan.id, {'plan': pPlan})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
