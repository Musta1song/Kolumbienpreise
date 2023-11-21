import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  currentCurrency = "EUR €"
  CurrencyIsEuro = true;
  currencybtnText = "Preise in COP $"
   

     
   


  ChangeCurrency() {
    if (this.CurrencyIsEuro == false) {
      this.CurrencyIsEuro = true;
      this.currentCurrency = "EUR €";
      this.currencybtnText = "Preise in COP $";


    }
    else {
      this.currentCurrency = "COP $"
      this.CurrencyIsEuro = false;
      this.currencybtnText = "Preise in EUR €";


    }
  }
  math(x: number) {
    if (this.CurrencyIsEuro == true) {
      x = x / 4500;
      return x.toFixed(2) + " €";
    }
    else {
      return x + " $"
    }

  }
}
