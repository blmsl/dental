import { Question } from './../../questions/shared/question';

export class AnamnesisQuestion {
    id:number;
    question:Question;
    question_id:number;
    question_active:boolean;

    constructor(){
        this.question = new Question();
    }
} 