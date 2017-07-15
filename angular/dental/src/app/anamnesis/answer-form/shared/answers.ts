import { Question } from './../../../anamnesis-model/questions/shared/question';

export class Answer{
    
    id:number;
    answer_text:string;	
    question_id:number;
    question:Question;

    constructor(){
        this.question = new Question();
    }
}