import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LoadRequestService {

  onLoadRequestStart:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  onLoadRequestEnd:EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor() { }

}
