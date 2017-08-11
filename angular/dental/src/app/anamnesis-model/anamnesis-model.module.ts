import { MaterializeModule } from 'angular2-materialize';
import { QuestionService } from './questions/shared/question.service';
import { DirectivesModule } from './../directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { AnamnesisModelService } from './anamnesis-model/shared/anamnesis-model.service';
import { AnamnesisModelRountingModule } from './anamnesis-model.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisModelComponent } from './anamnesis-model/anamnesis-model.component';
import { AnamnesisModelFormComponent } from './anamnesis-model/anamnesis-model-form/anamnesis-model-form.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';

@NgModule({
  imports: [
    CommonModule
    ,FormsModule 
    ,ReactiveFormsModule
    ,MaterializeModule

    ,AnamnesisModelRountingModule
    ,SharedModule
    ,DirectivesModule
  ],
  declarations: [AnamnesisModelComponent, AnamnesisModelFormComponent, QuestionFormComponent]
  ,providers:[AnamnesisModelService,QuestionService]
})
export class AnamnesisModelModule { }
