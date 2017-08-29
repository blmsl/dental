import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account/account-form/account-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AccountComponent, AccountFormComponent]
})
export class AdminModule { }
