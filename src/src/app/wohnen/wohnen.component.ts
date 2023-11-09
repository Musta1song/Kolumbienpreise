import { Component } from '@angular/core';
import { ExchangerateComponent } from '../exchangerate/exchangerate.component';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-wohnen',
  templateUrl: './wohnen.component.html',
  styleUrls: ['./wohnen.component.scss']
})
export class WohnenComponent {
  constructor(public ti: TimeService){}



}
