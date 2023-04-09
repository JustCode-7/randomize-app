import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanningPokerComponent} from './components/planning-poker/planning-poker.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar';
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
