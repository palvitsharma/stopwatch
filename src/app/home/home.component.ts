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
  interval:any;
  time = new Date(0);

  startTimer(){
    this.showReset = false;
    this.showStop = true;
    this.showStart = false;
    this.showLap = true;
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }

  pauseTimer(){
    this.showReset = true;
    this.showStart = true;
    this.showLap = false;
    this.showStop = false;
    clearInterval(this.interval);
    }

  resetTimer(){
    this.time.setSeconds(0);
  }

}

