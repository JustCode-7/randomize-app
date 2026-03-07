import {Component} from '@angular/core';
import {TimerService} from "../../../service/timer.service";
import {timer} from "rxjs";
import {ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-timer-imput-form',
  templateUrl: './timer-imput-form.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    NgStyle
  ]
})
export class TimerImputFormComponent {


  protected readonly timer = timer;

  constructor(public timerserivce: TimerService) {
  }
}
