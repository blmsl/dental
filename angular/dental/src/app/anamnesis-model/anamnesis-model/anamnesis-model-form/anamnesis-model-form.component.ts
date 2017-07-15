import { QuestionFormComponent } from './../../questions/question-form/question-form.component';
import { AnamnesisQuestion } from './../shared/anmnesis-question';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnamnesisModelService } from './../shared/anamnesis-model.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AnamnesisModel } from './anamnesis-model';

@Component({
  selector: 'app-anamnesis-model-form',
  templateUrl: './anamnesis-model-form.component.html',
  styleUrls: ['./anamnesis-model-form.component.css']
})
export class AnamnesisModelFormComponent implements OnInit {

  title:string;
  anamnesisModel:AnamnesisModel = new AnamnesisModel();
  anamnesisModelFormGroup:FormGroup;
  @ViewChild('questionform') 
  questionform:QuestionFormComponent;

  constructor(
    private _service:AnamnesisModelService
    ,private _route:ActivatedRoute
    ,private _router:Router
    ,private _formBuilder:FormBuilder
    ,private _flashMessagesService:FlashMessagesService
  ){ }

  ngOnInit() {
    
    this.anamnesisModelFormGroup = this._formBuilder.group({
      description:[null,Validators.required]
      ,anamnesis_questions: this._formBuilder.array([])
    });
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.title = id?'Editing':'Creating';
      let lServiceResult;
      if (id) 
        lServiceResult = this._service.get(id);
      else
        lServiceResult = this._service.new_object();

      lServiceResult.subscribe(data => {
        this.anamnesisModel = data;
        for (let lCont = 0; lCont < this.anamnesisModel.anamnesis_questions.length;lCont++){
          this.addAnamnesisQuestionFormControl()
        }
        
        console.log(this.anamnesisModelFormGroup);
      });
    })
    
  }

  private addAnamnesisQuestionFormControl(){
    const control = <FormArray>this.anamnesisModelFormGroup.controls['anamnesis_questions'];
    control.push(
      this._formBuilder.group({
        question_active:[null]
      })
    ); 
  }

  addQuestion(){
    this.questionform.newQuestion();
  }

  editQuestion(pQuestionId:number){
    this.questionform.editQuestion(pQuestionId);
  }
  

  save(){
    let lServiceResult;
    if (this.anamnesisModel.id)
      lServiceResult = this._service.update(this.anamnesisModel)
    else
      lServiceResult = this._service.create(this.anamnesisModel)
    
    lServiceResult.subscribe(
      res => {
        this._flashMessagesService.show('Anamnesis Model successfully '+(this.anamnesisModel.id?'Updated':'Created')+'!', { cssClass: 'alert-success', timeout: 2000 });
        this._router.navigate(['/anamnesis-models']);
      }
      ,err => {
        this._flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 2000 });
      });
  }

  onQuestionSave(pQuestion){
    
    let lAnamnesisQuestion = this.anamnesisModel.anamnesis_questions.find(
      lAnamnesisQuestion => {
        return lAnamnesisQuestion.question.id == pQuestion.id
      }
      
    );
    
    if (!lAnamnesisQuestion){
      lAnamnesisQuestion = new AnamnesisQuestion();
      lAnamnesisQuestion.question_id = pQuestion.id;
      lAnamnesisQuestion.question_active = true;  
      this.anamnesisModel.anamnesis_questions.push(lAnamnesisQuestion);
      this.addAnamnesisQuestionFormControl();
    }
    lAnamnesisQuestion.question = pQuestion;
  }

}
