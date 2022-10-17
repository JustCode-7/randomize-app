import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {formatDate} from "@angular/common";
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {
  timeForm: FormGroup; // Declare the signupForm
  forms: string[]
  feierabend: string = "feierabend";
  pausenzeit: string = "pausenzeit";
  extraPause = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;
  maxSpinnerValue = 0;
  timetoWork = "";
  timerId = 1;

  constructor(private fb: FormBuilder) {
    this.forms = [
      "starttime", "worktime", "pause"
    ]
    this.timeForm = this.fb.group({
      starttime: [this.getFormattedTimestring(9, 30), [Validators.required]],
      worktime: [this.getFormattedTimestring(7, 48), [Validators.required]],
      pause: [this.getFormattedTimestring(0, 30), [Validators.required]]
    });
  }

  public onFormSubmit() {
    if (this.timeForm.valid) {
      let startTimeArr: string[] = this.timeForm.get("starttime")?.value.split(":");
      let workTimeArr: string[] = this.timeForm.get("worktime")?.value.split(":");
      let pauseArr: string[] = this.timeForm.get("pause")?.value.split(":");
      let hours = this.getParseInt(startTimeArr[0]) + this.getParseInt(workTimeArr[0]) + this.getParseInt(pauseArr[0]);
      let minutes = this.getParseInt(startTimeArr[1]) + this.getParseInt(workTimeArr[1]) + this.getParseInt(pauseArr[1]);
      let work = this.getFormattedTimestring(this.getParseInt(workTimeArr[0]), this.getParseInt(workTimeArr[1]));
      this.timetoWork = work;
      this.feierabend = this.getFormattedTimestring(hours, minutes);
      this.checkForExtraPause(work, pauseArr);
      this.pausenzeit = this.getFormattedTimestring(this.getParseInt(pauseArr[0]), this.getParseInt(pauseArr[1]));
      this.getSpinnerMaxValue(workTimeArr, pauseArr);
      this.setSpinnerValue(startTimeArr);
      this.timeloop(startTimeArr)
    }
  }

  getSpinnerValue(startTimeArr: string[]) {
    let currentZeit = new Date().getTime();
    let startZeit = new Date().setHours(this.getParseInt(startTimeArr[0]), this.getParseInt(startTimeArr[1]));
    let vergangenInMinuten = (currentZeit - startZeit) / 60000;
    return vergangenInMinuten * 100 / this.maxSpinnerValue;
  }

  private checkForExtraPause(work: string, pauseArr: string[]) {
    if (work > this.getFormattedTimestring(9, 0)) {
      this.extraPause = true;
      pauseArr[1] = (this.getParseInt(pauseArr[1]) + 15).toString();
    } else {
      this.extraPause = false;
    }
  }

  private setSpinnerValue(startTimeArr: string[]) {
    if (this.value <= 100) {
      this.value = this.getSpinnerValue(startTimeArr);
    } else {
      clearInterval(this.timerId);
      return;
    }
  }

  private timeloop(startTimeArr: string[]) {
    this.timerId = setInterval(this.setSpinnerValue.bind(this), 30000, startTimeArr);
  }

  private getParseInt(startTime: string) {
    return Number.parseInt(startTime);
  }

  private getFormattedTimestring(hour: number, minute: number) {
    return formatDate(new Date().setHours(hour, minute), 'HH:mm', 'en');
  }

  private getSpinnerMaxValue(work: string[], pause: string[]) {
    let workduration = this.getParseInt(work[0]) * 60 + this.getParseInt(work[1])
    let pauseduration = this.getParseInt(pause[0]) * 60 + this.getParseInt(pause[1])
    this.maxSpinnerValue = workduration + pauseduration;
  }

}
