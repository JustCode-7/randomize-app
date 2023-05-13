import {Injectable} from '@angular/core';
import {FormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import {Utility} from "../../shared/utility/utility";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";
import {MatDialog} from "@angular/material/dialog";
import {PauseListComponent} from "../components/dialog/pause-list/pause-list.component";

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  forms?: string[];

  extraPause = false;
  progressSpinnerColor: ThemePalette = 'primary';
  progressSpinnerMode: ProgressSpinnerMode = 'determinate';
  progressSpinnerValue = 0;

  remaining = '';

  playIconSymbol: string = 'play_circle_filled';
  pauseActiveForSeconds!: any;
  pausehinweis: any;


  pausenzeit: string = "pausenzeit";
  startTime: Date | undefined;
  endTime: Date | undefined;

  feierabendDateString: string = "feierabend";
  timeForm!: UntypedFormGroup;
  maxSpinnerValue = 0;
  timetoWorkDateString = "";
  timerIdOneMinute = 1;
  timerIdOneSecond!: NodeJS.Timeout;
  startTimeArr: string[] = [];
  workTimeArr: string[] = [];
  pauseArr: string[] = [];
  vergangen = 0;
  pauseActive: boolean = false;
  pauseList: string[] = [];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
  }

  public calculateTotal() {
    if (this.timeForm?.valid) {
      this.startTimeArr = this.timeForm.get("starttime")?.value.split(":");
      this.workTimeArr = this.timeForm.get("worktime")?.value.split(":");
      this.pauseArr = this.timeForm.get("pause")?.value.split(":");
      let hours = this.getSumOfHours();
      let minutes = this.getSumOfMinutes();
      this.timetoWorkDateString = this.getFormattedTimeString(Number.parseInt(this.workTimeArr[0]), Number.parseInt(this.workTimeArr[1]));
      this.feierabendDateString = this.getFormattedTimeString(hours, minutes);
      this.calculatePause();
      this.getSpinnerMaxValue();
      this.setSpinnerValue(this.startTimeArr);
      this.timeLoopForOneMinute(this.startTimeArr);
      this.storeTimesInLocalStorage();
    }
  }

  setInitialTimeValues() {
    if (localStorage.getItem('startTime') != null) {
      this.timeForm?.get("starttime")?.setValue(JSON.parse(localStorage.getItem('startTime')!))
    } else {
      this.timeForm?.get("starttime")?.setValue(this.getFormattedTimeString(9, 30))
    }
    if (localStorage.getItem('workTime') != null) {
      this.timeForm?.get("worktime")?.setValue(JSON.parse(localStorage.getItem('workTime')!))
    } else {
      this.timeForm?.get("worktime")?.setValue(this.getFormattedTimeString(7, 48))
    }
    if (localStorage.getItem('Pause') != null) {
      this.timeForm?.get("pause")?.setValue(JSON.parse(localStorage.getItem('Pause')!))
    } else {
      this.timeForm?.get("pause")?.setValue(this.getFormattedTimeString(0, 30))
    }
    if (localStorage.getItem(this.getCurrentPauseListKey()) != null) {
      this.pauseList = JSON.parse(localStorage.getItem(this.getCurrentPauseListKey())!)
    } else {
      this.deleteOldPauseList();
      this.pauseList = [];
    }
  }

  getSpinnerValue(startTimeArr: string[]) {
    let currentZeit = new Date().getTime();
    let startZeit = new Date().setHours(Number.parseInt(startTimeArr[0]), Number.parseInt(startTimeArr[1]));
    let vergangenInMinuten = (currentZeit - startZeit) / 60000;
    this.vergangen = vergangenInMinuten;
    return vergangenInMinuten * 100 / this.maxSpinnerValue;
  }

  startPausetimer() {
    this.deleteOldPauseList();
    if (!this.pauseActive) {
      this.playIconSymbol = 'pause_circle_filled';
      this.startTime = new Date();
      this.pauseActive = true;
      this.timeLoopForOneSecond();
      this.calculateTotal();
    } else {
      clearInterval(this.timerIdOneSecond);
      this.playIconSymbol = 'play_circle_filled';
      this.pauseActive = false;
      this.endTime = new Date();
      this.pauseList.push(this.startTime!.toLocaleTimeString() + " - " + this.endTime!.toLocaleTimeString())
    }
    //TODO: Pausendauer aus dem Localstore lesen und hier reinschreiben
    if (this.getSeconds() > 0 && this.getSeconds() >= 60) {
      let minutes = Number.parseInt((this.getSeconds() / 60).toFixed(0));
      let newMinuteValue = Number.parseInt(this.pauseArr[1].valueOf()) + minutes;
      this.pauseArr[1] = newMinuteValue.toString()
      this.wennMinutenDieStundengrenzeErreichenSetzeStundenfeld();
      this.timeForm?.controls['pause'].setValue(this.getFormattedTimeString(0, newMinuteValue));
    }
  }

  getSeconds() {
    if (this.startTime == undefined || this.endTime == undefined) {
      return -1;
    }
    return Number.parseInt(((this.endTime!.getTime() - this.startTime!.getTime()) / 1000).toFixed(0));
  }

  getTimeToLeaveNotification() {
    const time = new Date().toLocaleTimeString()
    const text = `HEY! It's time to finish work and go home.`;
    return new Notification(time + ': Just go home.', {body: text});
  }

  getDrinkMoveNotification() {
    const time = new Date().toLocaleTimeString()
    const text = `HEY! You should drink something and move a little.`;
    return new Notification(time + ': Drink/Move', {body: text});
    //TODO: Notification.close()
  }

  initForm() {
    this.forms = [
      "starttime", "worktime", "pause"
    ]
    this.timeForm = this.fb.group({
      starttime: [this.getFormattedTimeString(9, 30), [Validators.required]],
      worktime: [this.getFormattedTimeString(7, 48), [Validators.required]],
      pause: [this.getFormattedTimeString(0, 30), [Validators.required]]
    });
  }

  timeLoopForOneSecond() {
    let date1: any = new Date();
    this.timerIdOneSecond = setInterval(() => {
      let date3 = new Date();
      date3.setTime(date3.getTime() - date1.getTime());
      date3.setHours(0);
      this.pauseActiveForSeconds = date3.toLocaleTimeString();
    }, 1000);
  }

  openPauseList() {
    this.dialog.open(PauseListComponent);

  }

  private deleteOldPauseList() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i)!.includes('pause-list') && !localStorage.key(i)!.match(this.getCurrentPauseListKey())) {
        localStorage.removeItem(localStorage.key(i)!)
      }
    }
  }

  private getCurrentPauseListKey() {
    return 'pause-list : ' + new Date().toLocaleDateString();
  }

  private wennMinutenDieStundengrenzeErreichenSetzeStundenfeld() {
    if (Number.parseInt(this.pauseArr[1]) >= 60) {
      let newHouresValue = Number.parseInt(this.pauseArr[0]) + Number.parseInt(((this.getSeconds() / 60) / 60).toFixed(0));
      this.pauseArr[0] = newHouresValue.toString();
    }
  }

  private storeTimesInLocalStorage() {
    localStorage.setItem('startTime', JSON.stringify(this.timeForm?.get("starttime")?.value));
    localStorage.setItem('workTime', JSON.stringify(this.timeForm?.get("worktime")?.value));
    //TODO: eventuell mit TimeStamp, um es für den nächsten Tag wieder auf 30 zu setzen
    localStorage.setItem('Pause', JSON.stringify(this.timeForm?.get("pause")?.value));
    localStorage.setItem(this.getCurrentPauseListKey(), JSON.stringify(this.pauseList))
  }

  private getSumOfHours() {
    return Number.parseInt(this.startTimeArr[0]) + Number.parseInt(this.workTimeArr[0]) + Number.parseInt(this.pauseArr[0]);
  }

  private getSumOfMinutes() {
    return Number.parseInt(this.startTimeArr[1]) + Number.parseInt(this.workTimeArr[1]) + Number.parseInt(this.pauseArr[1]);
  }

  private calculatePause() {
    this.extraPause = false;
    if ((this.timetoWorkDateString > this.getFormattedTimeString(6, 0)) && Number.parseInt(this.pauseArr[1]) < 30) {
      this.extraPause = true;
      this.pausehinweis = "Ab 6 Stunden Arbeitszeit sind insgesamt 30 Minuten Pause vorgeschrieben."
    }
    if ((this.timetoWorkDateString > this.getFormattedTimeString(9, 0)) && Number.parseInt(this.pauseArr[1]) < 45) {
      this.extraPause = true;
      this.pausehinweis = "Ab 9 Stunden Arbeitszeit sind insgesamt 45 Minuten Pause vorgeschrieben."
    }
    this.pausenzeit = this.getFormattedTimeString(Number.parseInt(this.pauseArr[0]), Number.parseInt(this.pauseArr[1]));
    this.timeForm?.controls['pause'].setValue(this.pausenzeit);

  }

  private setSpinnerValue(startTimeArr: string[]) {
    if (this.progressSpinnerValue <= 100) {
      this.progressSpinnerValue = this.getSpinnerValue(startTimeArr);
      this.getRemainingTime();
    } else {
      clearInterval(this.timerIdOneMinute);
      this.getRemainingTime();
      this.progressSpinnerValue = 0;
      return;
    }
  }

  private timeLoopForOneMinute(startTimeArr: string[]) {
    this.timerIdOneMinute = setInterval(this.setSpinnerValue.bind(this), 60000, startTimeArr);
  }

  private getFormattedTimeString(hour: number, minute: number) {
    return formatDate(new Date().setHours(hour, minute), 'HH:mm', 'en');
  }

  private getSpinnerMaxValue() {
    let workduration = Number.parseInt(this.workTimeArr[0]) * 60 + Number.parseInt(this.workTimeArr[1])
    let pauseduration = Number.parseInt(this.pauseArr[0]) * 60 + Number.parseInt(this.pauseArr[1])
    this.maxSpinnerValue = workduration + pauseduration;
  }

  private async getRemainingTime() {
    let minutes = this.maxSpinnerValue - this.vergangen;
    this.remaining = this.getFormattedTimeString(0, minutes);
    if (this.vergangen != 0 && this.vergangen % 30 == 0) {
      const notifDrink = this.getDrinkMoveNotification()
      await Utility.delay(3000)
      notifDrink.close();
    }
    if (minutes == 0) {
      const notifiLeave = this.getTimeToLeaveNotification()
      await Utility.delay(3000)
      notifiLeave.close();
    }
  }
}
