import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.scss']
})
export class ContractorComponent implements OnInit {
  myformGroup! : FormGroup
  constructor(private _builder : FormBuilder) { }

  ngOnInit(): void {
  }
  FormInit(){ this.myformGroup = this._builder.group({
    login : ['',Validators.required],
    password : ['',Validators.required]
  })
}

Login(){}
}
