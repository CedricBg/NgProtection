import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  myformGroup! : FormGroup
  constructor(private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.FormInit()
  }

  FormInit(){ this.myformGroup = this._builder.group({
    login : ['',Validators.required],
    password : ['',Validators.required]
  })
}

  Login(){

  }

}
