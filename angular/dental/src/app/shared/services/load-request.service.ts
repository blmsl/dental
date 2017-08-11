import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoadRequestService {

  onLoadRequest:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  
  constructor() {}

}
