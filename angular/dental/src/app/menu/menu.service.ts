import { MenuItem } from './shared/MenuItem';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {
    
  }

  getMenuList():Array<MenuItem>{
    let lListaMenu = [];
    let lSubMenuList = new Array<MenuItem>();
    
    lListaMenu.push(new MenuItem("event","Schedule","schedule",null));

    lSubMenuList = new Array<MenuItem>();
    lSubMenuList.push(new MenuItem("","Patients","patients",null));
    lSubMenuList.push(new MenuItem("","Patient-Groups","patient-groups",null));
    lListaMenu.push(new MenuItem("person","Patients","",lSubMenuList));
    
    lListaMenu.push(new MenuItem("finance","Finance","",null));
    lListaMenu.push(new MenuItem("","Products","",null));

    lSubMenuList = new Array<MenuItem>();
    lSubMenuList.push(new MenuItem("","Dentists","dentists",null));
    lListaMenu.push(new MenuItem("team","Team","",lSubMenuList));

    lSubMenuList = new Array<MenuItem>();
    lSubMenuList.push(new MenuItem("","Procedures","clinic/procedures",null));
    lSubMenuList.push(new MenuItem("","Procedure Categories","clinic/procedure-categories",null));
    lSubMenuList.push(new MenuItem("","Plans","clinic/plans",null));
    lSubMenuList.push(new MenuItem("","Anamnesis Models","anamnesis-models",null));
    lListaMenu.push(new MenuItem("settings","Settings","",lSubMenuList));

    return lListaMenu;
  }

}
