import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SupermarktpreiseComponent } from './supermarktpreise/supermarktpreise.component';
import { FastfoodpreiseComponent } from './fastfoodpreise/fastfoodpreise.component';
import { WohnenComponent } from './wohnen/wohnen.component';
import {HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    SupermarktpreiseComponent,
    FastfoodpreiseComponent,
    WohnenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
