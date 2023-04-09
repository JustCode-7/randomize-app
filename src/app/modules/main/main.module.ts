import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenueComponent} from './components/tab-menue/tab-menue.component';
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {RamdomizeModulModule} from "../ramdomize-modul/ramdomize-modul.module";
import {TimerModulModule} from "../timer-modul/timer-modul.module";
import {QrShareModule} from "../qr-share/qr-share.module";
import {PlanningPokerModule} from "../planning-poker/planning-poker.module";
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    TabMenueComponent,
    LandingPageComponent
  ],
  exports: [
    TabMenueComponent
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
    MatButtonModule,
    MatIconModule,
  ]
})
export class MainModule {
}
