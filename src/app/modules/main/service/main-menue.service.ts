import {Injectable} from '@angular/core';

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

  constructor() {
    this.tabs.push(
      new Tab("Randomizer", "/randomizer"),
      new Tab("Timer", "/timer"),
      new Tab("Qrcode-Share", "/qr"),
      new Tab("Planningpoker", "/poker")
    )
  }
}
