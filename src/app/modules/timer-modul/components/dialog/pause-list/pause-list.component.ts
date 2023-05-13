import {Component} from '@angular/core';
import {TimerService} from "../../../service/timer.service";

@Component({
  selector: 'app-pause-list',
  templateUrl: './pause-list.component.html',
})
export class PauseListComponent {

  constructor(public timerservice: TimerService) {
  }

}
