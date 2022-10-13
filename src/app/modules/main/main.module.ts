import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainMenueComponent} from './components/main-menue/main-menue.component';
import {MatTabsModule} from "@angular/material/tabs";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {RamdomizeModulModule} from "../ramdomize-modul/ramdomize-modul.module";
import {TimerModulModule} from "../timer-modul/timer-modul.module";
import {QrShareModule} from "../qr-share/qr-share.module";
import {PlanningPokerModule} from "../planning-poker/planning-poker.module";


@NgModule({
  declarations: [
    MainMenueComponent
  ],
  exports: [
    MainMenueComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RamdomizeModulModule,
    TimerModulModule,
    QrShareModule,
    PlanningPokerModule,
    MatTabsModule,
  ]
})
export class MainModule {
}
