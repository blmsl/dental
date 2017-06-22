import { AutoFocusDirective } from './auto-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutoFocusDirective
  ],
  exports:[
    AutoFocusDirective
  ]

})
export class DirectivesModule { }
