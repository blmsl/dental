import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Global } from './../../../global/global';
import { Question } from './question';

@Injectable()
export class QuestionService {

  private apiUrl = Global.apiURL()+"questions";
  constructor(protected _http:HttpClient) {}
  
  getAll():Observable<Question[]>{
    return this._http.get<Question[]>(this.apiUrl)
  }

  get(pQuetionId):Observable<Question>{
    return this._http.get<Question>(this.apiUrl+"/"+pQuetionId)
  }

  create(pQuestion:Question){
    return this._http.post(this.apiUrl, {'question': pQuestion})
  }

  update(pQuestion:Question){
    return this._http.put(this.apiUrl + '/' + pQuestion.id, {'question': pQuestion})
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
