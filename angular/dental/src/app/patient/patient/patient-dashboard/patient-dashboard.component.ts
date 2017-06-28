import { ActivatedRoute } from '@angular/router';
import { PatientService } from './../shared/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  id:number;

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params['id']);
    console.log(this.route);
  }

  

}
