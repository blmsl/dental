import { Contact } from './../../../contact/contact';
import { Address } from './address';
import { PatientGroup } from './../../patient-group/shared/patient-group';

export class Patient{
    
    id:number;
    name:string;
    photo:string;	
    created_at:Date;
    updated_at:Date;
    gender:string;
    date_of_birth:Date;
    location_of_birth:string;
    patient_group_id:number;
    material_status:string;
    cpf:string;
    rg:string;
    observation:string;

    patient_group:PatientGroup;
    address:Address;
    contact:Contact;

    constructor(){
        this.patient_group = new PatientGroup();
        this.address = new Address();
        this.contact = new Contact();
    }

}