import {Component, OnInit} from '@angular/core';
import {TimerService} from "../../service/timer.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {


  constructor(public timerservice: TimerService) {
  }

  ngOnInit(): void {
    this.timerservice.initForm();
    this.timerservice.setInitialTimeValues();
    this.timerservice.pauseActive = false;
    Notification.requestPermission();
  }


}
