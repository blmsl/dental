import { Answer } from './shared/answers';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'anamnesis-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {

  @Input()
  answer:Answer;
  
  constructor() { }

  ngOnInit() {
  }

}
