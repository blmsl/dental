import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProcedureCategoryService {

  private apiUrl = Global.apiURL()+"procedure_categories";

  constructor(private _http:Http) { }

    getAll(){ 
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  create(procedureCategory){
    return this._http.post(this.apiUrl, {'procedure_category': procedureCategory})
      .map(res => res.json());
  }

  update(procedureCategory){
    return this._http.put(this.apiUrl + '/' + procedureCategory.id, {'procedure_category': procedureCategory})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
