import { AuthenticationService } from './authentication/shared/authentication.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  showLayout:boolean = false;

  constructor(private _authService:AuthenticationService){
    this._authService.onAuthStateChange.subscribe(pLogged => this.showLayout = pLogged)
  }

}
