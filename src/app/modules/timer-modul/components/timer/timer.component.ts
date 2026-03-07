import {Component, OnInit} from '@angular/core';
import {TimerService} from "../../service/timer.service";
import {TimerImputFormComponent} from "./timer-imput-form/timer-imput-form.component";
import {NgIf, NgStyle} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {TimerProgressViewComponent} from "./timer-progress-view/timer-progress-view.component";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  standalone: true,
  imports: [
    TimerImputFormComponent,
    NgIf,
    NgStyle,
    MatButtonModule,
    TimerProgressViewComponent
  ]
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
