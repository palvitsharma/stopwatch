import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: AppComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule =  RouterModule.forRoot(routes);
