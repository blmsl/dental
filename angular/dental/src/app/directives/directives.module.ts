import { AutoFocusDirective } from './auto-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogDirective } from './confirm-dialog.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutoFocusDirective,
    ConfirmDialogDirective
  ],
  exports:[
    AutoFocusDirective
    ,ConfirmDialogDirective
  ]

})
export class DirectivesModule { }
