import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Answer} from '../answer-form/shared/answers'

@Component({
  selector: '[anamnesis-answer-list]',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {

  @Input()
  answers:Answer[];

  @Input("parentFormGroup")
  parentFormGroup:FormGroup;

  answersFormArray:FormArray;

  constructor(
    private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    //this.answersFormArray = this._formBuilder.array([]);
    //this.parentFormGroup.addControl("answers",this.answersFormArray);
  }

}
