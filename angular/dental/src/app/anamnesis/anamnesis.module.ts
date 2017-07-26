import { DirectivesModule } from './../directives/directives.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AnamnesisService } from './anamnesis/shared/anamnesis.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisComponent } from './anamnesis/anamnesis.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';

@NgModule({
  imports: [
    CommonModule
    ,ReactiveFormsModule
    ,FormsModule
    ,DirectivesModule
  ],
  declarations: [AnamnesisComponent, AnswerFormComponent]
  ,providers:[AnamnesisService]
  ,exports:[AnamnesisComponent]
})
export class AnamnesisModule { }
