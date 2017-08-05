import { Contact } from './../../../contact/contact';

export class Dentist{
    
    id:number;
    name:string;
    cpf:string
    cro:number;
    gender:string;
    date_of_birth:Date;
    contact:Contact;

    constructor(){
        this.contact = new Contact();
    }

}