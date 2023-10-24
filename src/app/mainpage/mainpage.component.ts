import { Component, Directive, Input } from '@angular/core';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent {

  buttonClicked() {
    window.location.replace("./Supermarkt") // switch to Supermarkt

  }


  fastfoodClick() {
    window.location.replace("./Fastfood") // switch to Fastfood



  }
  houseClicked() {
    window.location.replace("./Wohnen") // switch to Wohnen

  }
}


