export class MenuItem{

//    subMenuList:Array<MenuItem>;
    constructor(
        private iconPath:string
        ,private label:string
        ,private url:string
        ,public subMenuList:Array<MenuItem>){
        if ((subMenuList != null) && (subMenuList != undefined))
            this.subMenuList = subMenuList;
    }

}