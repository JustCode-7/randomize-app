import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimerComponent} from './components/timer/timer.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {TimerProgressViewComponent} from './components/timer/timer-progress-view/timer-progress-view.component';
import {TimerImputFormComponent} from './components/timer/timer-imput-form/timer-imput-form.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {RouterLink} from "@angular/router";
import {PauseListComponent} from './components/dialog/pause-list/pause-list.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    TimerComponent,
    TimerProgressViewComponent,
    TimerImputFormComponent,
    PauseListComponent
  ],
  exports: [
    TimerComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatBadgeModule,
    MatExpansionModule,
    RouterLink,
    MatDialogModule,
  ]
})
export class TimerModulModule {
}
