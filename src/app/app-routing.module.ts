import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { SigninUserComponent } from './pages/signin-user/signin-user.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { TestComponent } from './pages/test/test.component';
import { Test2Component } from './pages/test2/test2.component';


const routes: Routes = [
  {path:'', component:Test2Component},
  {path:'add-user', component:AddUserComponent},
  {path:'signin', component:SigninUserComponent},
  {path:'signup', component:SignupUserComponent},
  {path:'list-user', component:ListUserComponent},
  {path:'test', component:TestComponent},
  {path:'test2', component:Test2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
