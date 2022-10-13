import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RandomizeInputComponent} from "./modules/ramdomize-modul/randomize-input/randomize-input.component";
import {TimerComponent} from "./modules/timer-modul/components/timer/timer.component";
import {QrShareMainComponent} from "./modules/qr-share/components/qr-share-main/qr-share-main.component";
import {PlanningPokerComponent} from "./modules/planning-poker/components/planning-poker/planning-poker.component";

const routes: Routes = [
  {path: '', component: RandomizeInputComponent},
  {path: 'timer', component: TimerComponent},
  {path: 'qr', component: QrShareMainComponent},
  {path: 'poker', component: PlanningPokerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
