import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SupermarktpreiseComponent } from './supermarktpreise/supermarktpreise.component';
import { FastfoodpreiseComponent } from './fastfoodpreise/fastfoodpreise.component';
import { WohnenComponent } from './wohnen/wohnen.component';
import { ExchangerateComponent } from './exchangerate/exchangerate.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainpageComponent,
    SupermarktpreiseComponent,
    FastfoodpreiseComponent,
    WohnenComponent,
    ExchangerateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
