import { QuestionType } from './question-type';
export class Question{
    id:number;
    question_text:string;
    question_type:QuestionType;
    question_additional_text :string;
    is_alert_when :string;
    alert_text :string;

    show_secondary_question_when :string;
    secondary_question_text :string;
}