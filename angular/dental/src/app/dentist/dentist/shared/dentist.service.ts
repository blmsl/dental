import { Dentist } from './dentist';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Global } from './../../../global/global';
import { Injectable } from '@angular/core';

import { BaseAuthorizedService } from '../../../shared/auth/base-authorized.service';

@Injectable()
export class DentistService extends BaseAuthorizedService {

  private apiUrl = Global.apiURL()+"dentists";

  getAll(){ 
    return this._http.get(this.apiUrl)
      .map(res => res.json());
  }

  get(id){
    return this._http.get(this.apiUrl + '/' + id)
      .map(res => res.json());
  }

  create(pDentist:Dentist){
    return this._http.post(this.apiUrl, {'dentist': pDentist})
      .map(res => res.json());
  }

  update(pDentist:Dentist){
    return this._http.put(this.apiUrl + '/' + pDentist.id, {'dentist': pDentist})
      .map(res => res.json());
  }

  delete(id){
    return this._http.delete(this.apiUrl + '/' + id)
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
