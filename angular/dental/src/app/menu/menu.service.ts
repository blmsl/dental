import { MenuItem } from './shared/MenuItem';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {
    console.log("Iniciando MenuService");
  }

  getMenuList():Array<MenuItem>{
    let lListaMenu = [];
    lListaMenu.push(new MenuItem("event","Agenda",""));
    lListaMenu.push(new MenuItem("person","Paciente",""));
    lListaMenu.push(new MenuItem("finance","Financeiro",""));
    lListaMenu.push(new MenuItem("","Estoque",""));
    lListaMenu.push(new MenuItem("settings","Configurações",""));

    return lListaMenu;
  }

}
