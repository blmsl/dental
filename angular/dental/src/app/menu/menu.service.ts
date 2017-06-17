import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() {
    console.log("Iniciando MenuService");
  }

  getMenuList():Array<any>{
    return ["Agenda","Paciente","Financeiro","Estoque","Configurações"];
  }

}
