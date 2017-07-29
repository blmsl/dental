import { Schedule } from './schedule';
import { Observable } from 'rxjs/Rx';
import { Http,Headers } from '@angular/http';
import { Global, AUTH_TOKEN } from './../../../global/global';
import { Injectable } from '@angular/core';

import { BaseAuthorizedService } from '../../../shared/auth/base-authorized.service';



@Injectable()
export class ScheduleService extends BaseAuthorizedService {

  private apiUrl = Global.apiURL()+"schedules";

  getAll(){ 
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  create(pSchedule:Schedule){
    return this._http.post(this.apiUrl, {'schedule': pSchedule})
      .map(res => res.json());
  }

  update(pSchedule:Schedule){
    return this._http.put(this.apiUrl + '/' + pSchedule.id, {'schedule': pSchedule})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
