import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './Components/mainpage/mainpage.component';
import { SupermarktpreiseComponent } from './Components/supermarktpreise/supermarktpreise.component';
import { FastfoodpreiseComponent } from './Components/fastfoodpreise/fastfoodpreise.component';
import { WohnenComponent } from './Components/wohnen/wohnen.component';

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
