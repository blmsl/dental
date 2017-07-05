import { Plan } from './../../../clinic/plan/shared/plan';
export class Treatment{
    id:number;
    patient_id:number;
    plan_id:number;
    plan:Plan;

    constructor(){
        this.plan = new Plan();
    }
    
}