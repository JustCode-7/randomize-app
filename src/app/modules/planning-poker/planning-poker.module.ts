import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanningPokerComponent} from './components/planning-poker/planning-poker.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {YourChoiceButtomSheetComponent} from './components/your-choice-buttom-sheet/your-choice-buttom-sheet.component';
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";


@NgModule({
  declarations: [
    PlanningPokerComponent,
    YourChoiceButtomSheetComponent
  ],
  exports: [
    PlanningPokerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatBottomSheetModule,
  ]
})
export class PlanningPokerModule {
}
