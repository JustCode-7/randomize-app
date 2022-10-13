import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanningPokerComponent} from './components/planning-poker/planning-poker.component';


@NgModule({
  declarations: [
    PlanningPokerComponent
  ],
  exports: [
    PlanningPokerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanningPokerModule {
}
