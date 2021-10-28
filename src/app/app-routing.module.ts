import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';
import {AppComponent} from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'login', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path:'', component: SignupComponent, pathMatch: 'full'}

];

export const AppRoutingModule =  RouterModule.forRoot(routes);
