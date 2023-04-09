import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenueComponent} from './components/tab-menue/tab-menue.component';
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {RamdomizeModulModule} from "../ramdomize-modul/ramdomize-modul.module";
import {TimerModulModule} from "../timer-modul/timer-modul.module";
import {QrShareModule} from "../qr-share/qr-share.module";
import {PlanningPokerModule} from "../planning-poker/planning-poker.module";
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatIconModule} from "@angular/material/icon";


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
