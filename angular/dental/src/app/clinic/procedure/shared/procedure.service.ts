import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';

@Injectable()
export class ProcedureService {

  private apiUrl = Global.apiURL()+"procedures";

  constructor(private _http:Http) { }

  getAll(){ 
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  create(pProcedure){
    return this._http.post(this.apiUrl, {'procedure': pProcedure})
      .map(res => res.json());
  }

  update(pProcedure){
    return this._http.put(this.apiUrl + '/' + pProcedure.id, {'procedure': pProcedure})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
