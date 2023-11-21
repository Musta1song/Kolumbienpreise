import { Component } from '@angular/core';
import { TimeService } from '../time.service';
import { CurrencyService } from '../Currencyservice/currency.service';
@Component({
  selector: 'app-supermarktpreise',
  templateUrl: './supermarktpreise.component.html',
  styleUrls: ['./supermarktpreise.component.scss']
})
export class SupermarktpreiseComponent {
  constructor(public ti: TimeService, public cs: CurrencyService){}


}
