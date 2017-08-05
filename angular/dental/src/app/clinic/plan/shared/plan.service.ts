import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from './../../../global/global';
import { Plan } from './plan';

@Injectable()
export class PlanService{

  private apiUrl = Global.apiURL()+"plans";
  constructor(protected _http:HttpClient) {}

  getAll():Observable<Array<Plan>>{ 
    return this._http.get(this.apiUrl)
      //.map(res => res.json());
  }

  get(id):Observable<Plan>{
    return this._http.get(this.apiUrl + '/' + id)
      //.map(res => res.json());
  }

  create(pPlan){
    return this._http.post(this.apiUrl, {'plan': pPlan})
      //.map(res => res.json());
  }

  update(pPlan){
    return this._http.put(this.apiUrl + '/' + pPlan.id, {'plan': pPlan})
      //.map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      //.map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
