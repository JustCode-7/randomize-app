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
      new TabClass("Timer", "/timer"),
      new TabClass("Qrcode-Share", "/qr"),
      new TabClass("Planningpoker", "/poker")
    )
  }
}
