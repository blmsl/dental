import { MenuItem } from './shared/MenuItem';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {
    
  }

  getMenuList():Array<MenuItem>{
    let lListaMenu = [];
    lListaMenu.push(new MenuItem("event","Agenda","",null));
    lListaMenu.push(new MenuItem("person","Paciente","",null));
    lListaMenu.push(new MenuItem("finance","Financeiro","",null));
    lListaMenu.push(new MenuItem("","Estoque","",null));
    let lSubMenuList = new Array<MenuItem>();
    lSubMenuList.push(new MenuItem("","Procedures","procedures",null));
    lSubMenuList.push(new MenuItem("","Procedure Categories","procedure-categories",null));
    lListaMenu.push(new MenuItem("settings","Configurações","",lSubMenuList));

    return lListaMenu;
  }

}
