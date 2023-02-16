import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

class Tab {
  text!: String;
  route!: String;

  constructor(text: string, route: string) {
    this.text = text;
    this.route = route;
  }
}

@Injectable({
  providedIn: 'root'
})
export class MainMenueService {

  tabs: Tab[] = [];

  constructor(router: Router) {
    this.tabs.push(
      new Tab("Randomizer", "/"),
      new Tab("Timer", "/timer"),
      new Tab("Qrcode-Share", "/qr"),
      new Tab("Planningpoker", "/poker")
    )
  }
}
