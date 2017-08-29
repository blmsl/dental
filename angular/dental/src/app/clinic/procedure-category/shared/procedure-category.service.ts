import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';

import { Global } from './../../../global/global';
import { ProcedureCategory} from './procedure-category';

@Injectable()
export class ProcedureCategoryService{

  private apiUrl = Global.apiURL()+"procedure_categories";
  constructor(protected _http:HttpClient) {}

  getAll():Observable<ProcedureCategory[]>{ 
    return this._http.get<ProcedureCategory[]>(this.apiUrl)
  }

  get(id):Observable<ProcedureCategory>{
    return this._http.get<ProcedureCategory>(this.apiUrl + '/' + id)
  }

  create(procedureCategory){
    return this._http.post(this.apiUrl, {'procedure_category': procedureCategory})
  }

  update(procedureCategory){
    return this._http.put(this.apiUrl + '/' + procedureCategory.id, {'procedure_category': procedureCategory})
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
