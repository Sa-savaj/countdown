import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  days: number;
  hours: number;
  minutes: number;
  seconds:number;
  constructor() { }

  ngOnInit() {
    this.mi_funcion();
  }

  mi_funcion () {
    setInterval(()=>{
        let now = new Date().getTime();
        let countDownDate:number = new Date ("Jan 5, 2021 15:37:25").getTime();

        let distance: number = countDownDate - now
        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //console.log( `Faltan:  ${days} Dias, ${hours} Horas,  ${minutes} Minutos, ${seconds} Segundos`);
    },1000);

}  

}