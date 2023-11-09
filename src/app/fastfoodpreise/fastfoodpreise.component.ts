import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-fastfoodpreise',
  templateUrl: './fastfoodpreise.component.html',
  styleUrls: ['./fastfoodpreise.component.scss']
})
export class FastfoodpreiseComponent {
  constructor(public ti: TimeService){}


}
