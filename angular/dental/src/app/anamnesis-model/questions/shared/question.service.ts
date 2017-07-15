import { Observable } from 'rxjs/Rx';
import { Question } from './question';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';

@Injectable()
export class QuestionService {

  private apiUrl = Global.apiURL()+"questions";

  constructor(private _http:Http) { }

  getAll(){
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(pQuetionId){
    return this._http.get(this.apiUrl+"/"+pQuetionId)
      .map(res => res.json())
  }

  create(pQuestion:Question){
    return this._http.post(this.apiUrl, {'question': pQuestion})
      .map(res => res.json());
  }

  update(pQuestion:Question){
    return this._http.put(this.apiUrl + '/' + pQuestion.id, {'question': pQuestion})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
