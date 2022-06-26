import { HomeComponent } from './../component/home/home.component';
import { CustomerComponent } from './component/customer/customer.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './component/employee/employee.component';
import { ContractorComponent } from './component/contractor/contractor.component';

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home' , component : HomeComponent},
  { path: 'employee', component : EmployeeComponent },
  { path: 'customer', component : CustomerComponent },
  { path: 'contractor', component : ContractorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
