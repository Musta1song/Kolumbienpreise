import { Component } from '@angular/core';


@Component({
  selector: 'exchange-rate',
  template: `

  <iframe style="width:246px; text-align: center;" class="iframe"
      src="https://www.umrechner-euro.de/widget/widget.php?v=2&width=246&components=r&kursStart=USD&calcView=all&calcStartCountry=COP&calcEndCountry=EUR&kursCountries=EUR-CHF-&tableView=buttonAll&tableCount ry=USD&borderColor=CCCCCC&headerBackground=4F4F4F&headerColor=FFFFFF&fontColor=000000&boxBackground=F7F7F7&linkColor=FF7A00&tableHead=ADADAD&tableHeadColor=FFFFFF&tableBackground=FFFFFF&tableRowColor=000000&buttonBackground=FF7A00&buttonColor=FFFFFF&fontFamily=Tahoma&fontHeadSize=12&fontContentSize=12"
      width="246" height="198" name="iframe" id="iframe" marginwidth="0" marginheight="0" frameborder="0"
      scrolling="no">
  </iframe>

`
})
export class ExchangerateComponent {

}
