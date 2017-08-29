import { Component } from '@angular/core';

import { AuthenticationService } from './authentication/shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLayout:boolean = false;

  constructor(private _authService:AuthenticationService){
    this._authService.onAuthStateChange.subscribe(pLogged => this.showLayout = pLogged)
  }

}
