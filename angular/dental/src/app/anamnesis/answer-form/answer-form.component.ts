import { QuestionType } from './../../anamnesis-model/questions/shared/question-type';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Answer } from './shared/answers';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'anamnesis-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  @Input()
  answer:Answer;
  @Input()
  index:number;

  constructor() { }

  ngOnInit() {
   
  }

  showRadioOptions():boolean{
    return (this.answer.question.question_type !== QuestionType.only_text) 
  }

  showIDontKnowOption():boolean{
    return (this.answer.question.question_type === QuestionType.yes_no_i_dont_know) 
          || (this.answer.question.question_type === QuestionType.yes_no_i_dont_know_and_text) 
  }

  showAdditionalText(){
    return  (QuestionType.yes_no_i_dont_know_and_text === this.answer.question.question_type)
            || (QuestionType.only_text === this.answer.question.question_type);
  }

  showSecondaryQuestionText(){
    return  (this.answer.question.show_secondary_question_when != undefined) && (this.answer.question.show_secondary_question_when === this.answer.answer_text);
  }

}
