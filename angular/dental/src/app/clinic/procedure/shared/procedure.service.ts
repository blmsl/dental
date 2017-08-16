import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from './../../../global/global';
import { Procedure } from './procedure';

@Injectable()
export class ProcedureService {

  private apiUrl = Global.apiURL()+"procedures";
  constructor(protected _http:HttpClient) {}
  
  getAll():Observable<Procedure[]>{ 
    return this._http.get<Procedure[]>(this.apiUrl)
  }

  get(id):Observable<Procedure>{
    return this._http.get<Procedure>(this.apiUrl + '/' + id)
  }

  create(pProcedure){
    return this._http.post(this.apiUrl, {'procedure': pProcedure})
  }

  update(pProcedure){
    return this._http.put(this.apiUrl + '/' + pProcedure.id, {'procedure': pProcedure})
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
