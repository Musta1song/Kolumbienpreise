import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SupermarktpreiseComponent } from './supermarktpreise/supermarktpreise.component';
import { FastfoodpreiseComponent } from './fastfoodpreise/fastfoodpreise.component';
import { WohnenComponent } from './wohnen/wohnen.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },

{ path: 'Supermarkt',
component: SupermarktpreiseComponent
},
{path: 'Fastfood',
component: FastfoodpreiseComponent
},
{path: 'Wohnen',
component: WohnenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
