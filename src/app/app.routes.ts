import {Routes} from '@angular/router';
import {TimerComponent} from "./modules/timer-modul/components/timer/timer.component";
import {QrShareMainComponent} from "./modules/qr-share/components/qr-share-main/qr-share-main.component";
import {PlanningPokerComponent} from "./modules/planning-poker/components/planning-poker/planning-poker.component";
import {LandingPageComponent} from "./modules/main/components/landing-page/landing-page.component";
import {RandomizeMainComponent} from "./modules/ramdomize-modul/components/randomize-main/randomize-main.component";

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'randomizer', component: RandomizeMainComponent},
  {path: 'timer', component: TimerComponent},
  {path: 'qr', component: QrShareMainComponent},
  {path: 'poker', component: PlanningPokerComponent},
];
