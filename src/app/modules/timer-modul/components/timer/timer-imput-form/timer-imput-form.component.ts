import {Component} from '@angular/core';
import {TimerService} from "../../../service/timer.service";
import {timer} from "rxjs";

@Component({
  selector: 'app-timer-imput-form',
  templateUrl: './timer-imput-form.component.html',
})
export class TimerImputFormComponent {


  protected readonly timer = timer;

  constructor(public timerserivce: TimerService) {
  }
}
