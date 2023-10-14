import { Component } from '@angular/core';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent {

 buttonClicked() {
window.location.replace("./Supermarkt")
}
fastfoodClick(){
  window.location.replace("./Fastfood")

}
houseClicked(){
  window.location.replace("./Wohnen")

}
}

