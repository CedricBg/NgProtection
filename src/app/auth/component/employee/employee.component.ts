import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private _builder : FormBuilder) { }
  myformGroup! : FormGroup
  ngOnInit(): void {
    this.FormInit()
  }

  FormInit(){

    this.myformGroup = this._builder.group({
      login : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  Login(){

  }
}
