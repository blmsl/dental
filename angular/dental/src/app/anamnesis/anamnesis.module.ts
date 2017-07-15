import { AnamnesisService } from './anamnesis/shared/anamnesis.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisComponent } from './anamnesis/anamnesis.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnamnesisComponent, AnswerFormComponent]
  ,providers:[AnamnesisService]
  ,exports:[AnamnesisComponent]
})
export class AnamnesisModule { }
