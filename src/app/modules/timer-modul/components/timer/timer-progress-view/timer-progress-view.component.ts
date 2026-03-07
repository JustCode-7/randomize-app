import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-timer-progress-view',
  templateUrl: './timer-progress-view.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    MatProgressSpinnerModule
  ]
})
export class TimerProgressViewComponent {

  @Input() progressSpinnerValue!: number;
  @Input() feierabendDateString!: string;
  @Input() progressSpinnerColor: "primary" | "accent" | "warn" | undefined;
  @Input() progressSpinnerMode!: "determinate" | "indeterminate";
  @Input() remaining!: string;
  protected readonly Number = Number;
}
