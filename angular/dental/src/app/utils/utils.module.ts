import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPainelComponent } from './error-painel/error-painel.component';
import { ErrorPainelDirective } from './error-painel.directive';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ErrorPainelComponent, ErrorPainelDirective, ErrorMessageComponent]
})
export class UtilsModule { }
