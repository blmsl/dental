import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { QuestionService } from './../shared/question.service';
import { Question } from './../shared/question';
import { QuestionType, QuestionTypesList, QuestionTypeItemList } from './../shared/question-type';


@Component({
  selector: 'anamnesis-model-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {

  title:string;
  question:Question = new Question();
  question_types:Array<QuestionTypeItemList> = QuestionTypesList;
  questionFormGroup:FormGroup;
  modalActions = new EventEmitter<string|MaterializeAction>();

  @Output("onsave")
  onSave:EventEmitter<Question> = new EventEmitter<Question>();

  constructor(
    private _service:QuestionService
    ,private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.questionFormGroup = this._formBuilder.group({
      question_text:[null,Validators.required]
      ,question_type:[null,Validators.required]
      ,question_additional_text:[null]
      ,is_alert_when:[null]
      ,alert_text:[null]
    });
    
  }

  newQuestion(){
    this.question = new Question();
    this.title = "Creating"; 
    this.openModal(); 
  }

  editQuestion(pQuestionId){
    this._service.get(pQuestionId)
      .subscribe(res => {
        this.question = res;
        this.title = "Editing";
        this.openModal();
      })
  }

  save(){
    let lServiceResult;
    if(this.question.id)
      lServiceResult = this._service.update(this.question)
    else
      lServiceResult = this._service.create(this.question);
    
    lServiceResult.subscribe(res => {
      this.question = res;
      console.log(this.question);
      this.closeModal();
      if (this.onSave)
        this.onSave.emit(this.question)
    }
    ,err => alert(err))
  }

  private openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
    
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  showQuestionAdditionalText(){
    return  (QuestionType.yes_no_i_dont_know_and_text == this.question.question_type)
            || (QuestionType.only_text == this.question.question_type);
  }

  showQuestionAlertText(){
    return  (this.question.is_alert_when != undefined) && (this.question.is_alert_when.length > 0);
  }

}
