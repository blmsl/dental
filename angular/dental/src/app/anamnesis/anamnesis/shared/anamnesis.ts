import { Answer } from '../../answer-form/shared/answers';
export class Anamnesis {
    id:number;
    anamnesis_model_id:number;
    patient_id:number;
    answers:Array<Answer> = [];
    
}