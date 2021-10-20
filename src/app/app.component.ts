import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stopwatch';
  
  interval:any;
  time = new Date(0);

  startTimer(){
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000);
  }

  pauseTimer(){
    clearInterval(this.interval);
    }

  resetTimer(){
    this.time.setSeconds(0);
    this.time.setMinutes(0);
    this.time.setHours(0);  
  }

}
