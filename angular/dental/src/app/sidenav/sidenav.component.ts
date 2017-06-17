import { MenuItem } from './../menu/shared/MenuItem';
import { MenuService } from './../menu/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  listaMenu:Array<MenuItem>;
  constructor(private _menuService:MenuService) { }

  ngOnInit() {
    this.listaMenu = this._menuService.getMenuList();
  }

}
