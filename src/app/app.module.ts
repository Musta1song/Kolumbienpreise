import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { SupermarktpreiseComponent } from './Components/supermarktpreise/supermarktpreise.component';
import { FastfoodpreiseComponent } from './Components/fastfoodpreise/fastfoodpreise.component';
import { WohnenComponent } from './Components/wohnen/wohnen.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    HttpClientJsonpModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
