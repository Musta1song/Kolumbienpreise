import { Component } from '@angular/core';
import { TimeService } from '../../Services/TimeService/time.service';
import { CurrencyService } from '../../Services/Currencyservice/currency.service';
@Component({
  selector: 'app-wohnen',
  templateUrl: './wohnen.component.html',
  styleUrls: ['./wohnen.component.scss']
})
export class WohnenComponent {
  constructor(public ti: TimeService,public cs: CurrencyService){}



}
