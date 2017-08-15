import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Global } from './../../../global/global';
import { Budget } from './budget';

@Injectable()
export class BudgetService {

  constructor(private _http:HttpClient) { }

  getAllFromPatient(pPatientId:number):Observable<Budget[]>{ 
    return this._http.get<Budget[]>(this.apiURL(pPatientId))
  }

  get(pPatientId:number,pBudgetId:number):Observable<Budget>{
    return this._http.get<Budget>(this.apiURL(pPatientId) + '/' + pBudgetId)
  }

  create(pPatientId:number,pBudget:Budget){
    return this._http.post(this.apiURL(pPatientId), {'budget': pBudget})
  }

  update(pPatientId:number,pBudget:Budget){
    return this._http.put(this.apiURL(pPatientId) + '/' + pBudget.id, {'treatment': pBudget})
  }

  delete(pPatientId:number,pBudgetId:number){
    return this._http.delete(this.apiURL(pPatientId)+ '/' + pBudgetId)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
  private apiURL(pPatientId:number):string{
    return Global.apiURL()+"patients/"+pPatientId+"/budgets";
  }

}
