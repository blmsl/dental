import { LayoutComponentsModule } from './layout-components/layout-components.module';
import { MenuService } from './menu/menu.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout-components/navbar/navbar.component';
import { SidenavComponent } from './layout-components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    ,MaterializeModule
    ,LayoutComponentsModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
