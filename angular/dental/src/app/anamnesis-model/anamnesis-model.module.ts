import { DirectivesModule } from './../directives/directives.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsModule } from './../utils/utils.module';
import { AnamnesisModelService } from './anamnesis-model/shared/anamnesis-model.service';
import { AnamnesisModelRountingModule } from './anamnesis-model.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnamnesisModelComponent } from './anamnesis-model/anamnesis-model.component';
import { AnamnesisModelFormComponent } from './anamnesis-model/anamnesis-model-form/anamnesis-model-form.component';

@NgModule({
  imports: [
    CommonModule
    ,ReactiveFormsModule

    ,AnamnesisModelRountingModule
    ,UtilsModule
    ,DirectivesModule
  ],
  declarations: [AnamnesisModelComponent, AnamnesisModelFormComponent]
  ,providers:[AnamnesisModelService]
})
export class AnamnesisModelModule { }
