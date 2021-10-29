import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Stopwatch';
  showReset = false;
  showStop = false;
  showLap = true;
  showStart = true;
  time = new Date(0);
  mm = 0;
  ss = 0;
  hh = 0;
  timerId: any;

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  startTimer(){
    this.showReset = false;
    this.showStop = true;
    this.showStart = false;
    this.showLap = true;
    this.timerId = setInterval(() => {
      this.ss++;
      if (this.ss >= 60) {
        this.mm++;
        this.ss = 0;
      }
    }, 1000);
  }

  pauseTimer(){
    this.showReset = true;
    this.showStart = true;
    this.showLap = false;
    this.showStop = false;
    clearInterval(this.timerId);
    }

  resetTimer(){
    this.hh =0;
    this.mm=0;
    this.ss=0; 
  }

}

