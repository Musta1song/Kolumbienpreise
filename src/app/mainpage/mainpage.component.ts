import { Component } from '@angular/core';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent {

 buttonClicked() {
window.location.replace("http://localhost:4200/Supermarkt")
}
fastfoodClick(){
  window.location.replace("http://localhost:4200/Fastfood")

}
}

