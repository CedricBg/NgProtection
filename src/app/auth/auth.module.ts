import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { EmployeeComponent } from './component/employee/employee.component';
import { CustomerComponent } from './component/customer/customer.component';
import { ContractorComponent } from './component/contractor/contractor.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    CustomerComponent,
    ContractorComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
