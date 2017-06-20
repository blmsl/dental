import { MenuItem } from '../../menu/shared/MenuItem';
import { MenuService } from '../../menu/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  menuList:Array<MenuItem>;
  sideNavOptions:any = {
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    };
  constructor(private _menuService:MenuService) { }

  ngOnInit() {
    this.menuList = this._menuService.getMenuList();
    console.log(this.menuList);
  }

}
