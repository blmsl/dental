import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from './../../../global/global';
import { Plan } from './plan';

@Injectable()
export class PlanService{

  private apiUrl = Global.apiURL()+"plans";
  constructor(protected _http:HttpClient) {}

  getAll():Observable<Plan[]>{ 
    return this._http.get<Plan[]>(this.apiUrl)
  }

  get(id):Observable<Plan>{
    return this._http.get<Plan>(this.apiUrl + '/' + id)
  }

  create(pPlan){
    return this._http.post(this.apiUrl, {'plan': pPlan})
  }

  update(pPlan){
    return this._http.put(this.apiUrl + '/' + pPlan.id, {'plan': pPlan})
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
