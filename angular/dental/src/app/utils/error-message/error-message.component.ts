import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input()
  group:FormGroup;
  @Input()
  controlName:string;
  @Input()
  labelHtmlComp:HTMLElement;
  @Input()
  inputHtmlComp:HTMLInputElement;
  @Output()
  control;
  
  constructor() { }

  ngOnInit() {
    if (this.group == undefined) console.error('formGroup was not setted');
    if (this.controlName == undefined) console.error('controlName was not setted');

    this.control = this.group.get(this.controlName);
    this.control.isInvalidControl = () =>{
      return !this.control.valid && (this.control.touched);
    }
  }

  getErrorListOf(){ 
    if (this.group == undefined) return [];
    if (this.controlName == undefined)  return [];

    let lErrorList = [];

    //console.log(this.formGroup.controls);
    if (this.group.controls){
      
      if (this.control.isInvalidControl()){
        //console.log(lFormControl.errors);
        if (this.control.errors['required'])
          lErrorList.push("Required");

        if (this.control.errors['minlength'])
          lErrorList.push("Min Length: "+this.control.errors['minlength']['requiredLength']);

          if (this.control.errors['maxlength'])
          lErrorList.push("Max Length: "+this.control.errors['maxlength']['requiredLength']);

        if (this.control.errors['email'])
          lErrorList.push("email");
      }
    }
    return lErrorList;
  }
}
