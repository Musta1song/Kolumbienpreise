
import { Component, OnInit } from '@angular/core';
import { TimeService } from '../../Services/TimeService/time.service';
import { CurrencyService } from '../../Services/Currencyservice/currency.service';

@Component({
  selector: 'app-fastfoodpreise',
  templateUrl: './fastfoodpreise.component.html',
  styleUrls: ['./fastfoodpreise.component.scss']
})
export class FastfoodpreiseComponent {
  constructor(
    public ti: TimeService,
    public cs: CurrencyService) { }

}