import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent implements OnInit {

  id:number;

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe( params => this.id = params['id']);
  }

}
