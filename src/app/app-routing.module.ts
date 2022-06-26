import { FourofourComponent } from './component/fourofour/fourofour.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'home' , component : HomeComponent},
  { path : 'connexion' , loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  { path : '**' , redirectTo : '404' ,pathMatch : 'full'},
  { path : '404' , component : FourofourComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
