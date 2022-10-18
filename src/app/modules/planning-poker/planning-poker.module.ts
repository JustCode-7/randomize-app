import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanningPokerComponent} from './components/planning-poker/planning-poker.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    PlanningPokerComponent
  ],
  exports: [
    PlanningPokerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
  ]
})
export class PlanningPokerModule {
}
