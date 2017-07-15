import { ActivatedRoute } from '@angular/router';
import { AnamnesisService } from './shared/anamnesis.service';
import { Anamnesis } from './shared/anamnesis';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {

  anamnesis:Anamnesis = new Anamnesis();
  constructor(
    private _service:AnamnesisService
    ,private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => {
      let patient_id = params['id'];
      if (!patient_id) return;
      this._service.get(patient_id).subscribe(data => this.anamnesis = data);
    })
  }

}
