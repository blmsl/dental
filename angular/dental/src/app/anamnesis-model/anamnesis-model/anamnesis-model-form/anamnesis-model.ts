import { AnamnesisQuestion } from './../shared/anmnesis-question';

export class AnamnesisModel {
    id:number;
    anamnesis_questions:Array<AnamnesisQuestion>;

    constructor(){
        this.anamnesis_questions = new Array<AnamnesisQuestion>();
    }


}