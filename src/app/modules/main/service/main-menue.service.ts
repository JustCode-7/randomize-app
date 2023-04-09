import {Injectable} from '@angular/core';
import {TabClass} from "../../shared/tabclass";

@Injectable({
  providedIn: 'root'
})
export class MainMenueService {
  tabs: TabClass[] = [];

  constructor() {
    this.tabs.push(
      new TabClass("Randomizer", "/randomizer"),
      new TabClass("Work-Timer", "/timer"),
      new TabClass("QR-Code", "/qr"),
      new TabClass("Planning-Poker", "/poker")
    )
  }
}
