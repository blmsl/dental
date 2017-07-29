import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Global } from './../../../global/global';
import { Question } from './question';
import { BaseAuthorizedService } from '../../../shared/auth/base-authorized.service';

@Injectable()
export class QuestionService extends BaseAuthorizedService {

  private apiUrl = Global.apiURL()+"questions";
  
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
