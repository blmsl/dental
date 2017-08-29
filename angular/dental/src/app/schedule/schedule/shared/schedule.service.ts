import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Schedule } from './schedule';
import { Global } from './../../../global/global';

@Injectable()
export class ScheduleService {

  private apiUrl = Global.apiURL()+"schedules";

  constructor(protected _http:HttpClient) {}

  getAll():Observable<Schedule[]>{ 
    return this._http.get<Schedule[]>(this.apiUrl)
  }

  get(id):Observable<Schedule>{
    return this._http.get<Schedule>(this.apiUrl + '/' + id)
  }

  create(pSchedule:Schedule){
    return this._http.post(this.apiUrl, {'schedule': pSchedule})
  }

  update(pSchedule:Schedule){
    return this._http.put(this.apiUrl + '/' + pSchedule.id, {'schedule': pSchedule})
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
