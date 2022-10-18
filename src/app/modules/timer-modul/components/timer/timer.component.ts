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
  timeForm: FormGroup;
  forms: string[]
  feierabendDateString: string = "feierabend";
  pausenzeit: string = "pausenzeit";
  extraPause = false;
  progressSpinnerColor: ThemePalette = 'primary';
  progressSpinnerMode: ProgressSpinnerMode = 'determinate';
  progressSpinnerValue = 0;
  maxSpinnerValue = 0;
  timetoWorkDateString = "";
  timerId = 1;
  startTimeArr: string[] = [];
  workTimeArr: string[] = [];
  pauseArr: string[] = [];
  vergangen = 0;
  remaining = '';

  constructor(private fb: FormBuilder) {
    this.forms = [
      "starttime", "worktime", "pause"
    ]
    this.timeForm = this.fb.group({
      starttime: [this.getFormattedTimeString(9, 30), [Validators.required]],
      worktime: [this.getFormattedTimeString(7, 48), [Validators.required]],
      pause: [this.getFormattedTimeString(0, 30), [Validators.required]]
    });
  }

  public calculateTotal() {
    if (this.timeForm.valid) {
      this.startTimeArr = this.timeForm.get("starttime")?.value.split(":");
      this.workTimeArr = this.timeForm.get("worktime")?.value.split(":");
      this.pauseArr = this.timeForm.get("pause")?.value.split(":");
      let hours = this.getSumOfHours();
      let minutes = this.getSumOfMinutes();
      this.timetoWorkDateString = this.getFormattedTimeString(this.getParseInt(this.workTimeArr[0]), this.getParseInt(this.workTimeArr[1]));
      this.feierabendDateString = this.getFormattedTimeString(hours, minutes);
      this.feierabendDateString = this.getFormattedTimeString(hours, minutes);
      this.calculatePause();
      this.getSpinnerMaxValue();
      this.setSpinnerValue(this.startTimeArr);
      this.timeLoop(this.startTimeArr);
    }
  }

  getSpinnerValue(startTimeArr: string[]) {
    let currentZeit = new Date().getTime();
    let startZeit = new Date().setHours(this.getParseInt(startTimeArr[0]), this.getParseInt(startTimeArr[1]));
    let vergangenInMinuten = (currentZeit - startZeit) / 60000;
    this.vergangen = vergangenInMinuten;
    return vergangenInMinuten * 100 / this.maxSpinnerValue;
  }

  private getSumOfHours() {
    return this.getParseInt(this.startTimeArr[0]) + this.getParseInt(this.workTimeArr[0]) + this.getParseInt(this.pauseArr[0]);
  }

  private getSumOfMinutes() {
    return this.getParseInt(this.startTimeArr[1]) + this.getParseInt(this.workTimeArr[1]) + this.getParseInt(this.pauseArr[1]);
  }

  private calculatePause() {
    this.extraPause = false;
    if ((this.timetoWorkDateString > this.getFormattedTimeString(6, 0)) && this.getParseInt(this.pauseArr[1]) < 30) {
      this.pauseArr[1] = "30";
    }
    if ((this.timetoWorkDateString > this.getFormattedTimeString(9, 0)) && this.getParseInt(this.pauseArr[1]) < 45) {
      this.extraPause = true;
      this.pauseArr[1] = (this.getParseInt(this.pauseArr[1]) + 15).toString();
    }
    this.pausenzeit = this.getFormattedTimeString(this.getParseInt(this.pauseArr[0]), this.getParseInt(this.pauseArr[1]));
    this.timeForm.controls['pause'].setValue(this.pausenzeit);

  }

  private setSpinnerValue(startTimeArr: string[]) {
    if (this.progressSpinnerValue <= 100) {
      this.progressSpinnerValue = this.getSpinnerValue(startTimeArr);
      this.getRemainingTime();
    } else {
      clearInterval(this.timerId);
      this.getRemainingTime();
      this.progressSpinnerValue = 0;
      return;
    }
  }

  private timeLoop(startTimeArr: string[]) {
    this.timerId = setInterval(this.setSpinnerValue.bind(this), 60000, startTimeArr);
  }

  private getParseInt(startTime: string) {
    return Number.parseInt(startTime);
  }

  private getFormattedTimeString(hour: number, minute: number) {
    return formatDate(new Date().setHours(hour, minute), 'HH:mm', 'en');
  }

  private getSpinnerMaxValue() {
    let workduration = this.getParseInt(this.workTimeArr[0]) * 60 + this.getParseInt(this.workTimeArr[1])
    let pauseduration = this.getParseInt(this.pauseArr[0]) * 60 + this.getParseInt(this.pauseArr[1])
    this.maxSpinnerValue = workduration + pauseduration;
  }

  private getRemainingTime() {
    let minutes = this.maxSpinnerValue - this.vergangen;
    this.remaining = this.getFormattedTimeString(0, minutes);
  }

}
