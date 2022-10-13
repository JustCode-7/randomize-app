import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  timeFromControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();
  inputpause: Date = new Date();
  inputworktime: Date = new Date();
  inputstarttime: Date = new Date();

  constructor() {
  }

  calculate(inputstarttime: Date, inputworktime: Date, inputpause: Date) {
    this.inputstarttime = inputstarttime;
    this.inputworktime = inputworktime;
    this.inputpause = inputpause;
    console.log(this.inputstarttime.getHours() + ":" + this.inputpause.getMinutes());
    console.log(this.inputworktime.getHours() + ":" + this.inputworktime.getMinutes());
    console.log(this.inputpause.getHours() + ":" + this.inputpause.getMinutes());
    if (inputstarttime === null
      &&
      inputworktime === null
      &&
      inputpause === null) {
      console.log("null");
    }
    // console.log(inputstarttime + inputstarttime + inputstarttime);
  }

}
