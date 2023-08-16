import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddUserComponent } from './pages/add-user/add-user.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import { SigninUserComponent } from './pages/signin-user/signin-user.component';
import { SignupUserComponent } from './pages/signup-user/signup-user.component';
import { TestComponent } from './pages/test/test.component';
import { NgConfirmModule } from 'ng-confirm-box';
import { Test2Component } from './pages/test2/test2.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ListUserComponent,
    SigninUserComponent,
    SignupUserComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgConfirmModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
