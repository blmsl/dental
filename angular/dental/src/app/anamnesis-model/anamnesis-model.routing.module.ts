import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AnamnesisModelFormComponent } from './anamnesis-model/anamnesis-model-form/anamnesis-model-form.component';
import { AnamnesisModelComponent } from './anamnesis-model/anamnesis-model.component';

const ANAMNESIS_MODEL_ROUTE: Routes = [
    {path:'anamnesis-models',component: AnamnesisModelComponent}
    ,{path:'anamnesis-models/new',component: AnamnesisModelFormComponent}
    ,{path:'anamnesis-models/:id',component: AnamnesisModelFormComponent}
];
@NgModule({
    imports:[RouterModule.forChild(ANAMNESIS_MODEL_ROUTE)],
    exports:[RouterModule]

})
export class AnamnesisModelRountingModule{}