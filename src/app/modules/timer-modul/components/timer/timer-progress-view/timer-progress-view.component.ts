import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timer-progress-view',
  templateUrl: './timer-progress-view.component.html',
})
export class TimerProgressViewComponent {

  @Input() progressSpinnerValue!: number;
  @Input() feierabendDateString!: string;
  @Input() progressSpinnerColor: "primary" | "accent" | "warn" | undefined;
  @Input() progressSpinnerMode!: "determinate" | "indeterminate";
  @Input() remaining!: string;
  protected readonly Number = Number;
}
