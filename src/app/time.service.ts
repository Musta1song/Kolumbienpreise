import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { interval } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TimeService {
    dateTime= new Date();
  
    ngOnInit(){
      this.startclock();
    }
    startclock(){
      interval(1).subscribe(data=>{
        this.dateTime = new Date();
      });
    }
}
