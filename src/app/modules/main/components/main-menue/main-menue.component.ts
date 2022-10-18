import {Component} from '@angular/core';
import {Router} from "@angular/router";

class Tab {
  text!: String;
  route!: String;

  constructor(text: string, route: string) {
    this.text = text;
    this.route = route;
  }
}

@Component({
  selector: 'app-main-menue',
  templateUrl: './main-menue.component.html',
  styleUrls: ['./main-menue.component.scss']
})
export class MainMenueComponent {
  tabs: Tab[] = [];

  constructor(private router: Router) {
    this.tabs.push(
      new Tab("Randomizer", "/"),
      new Tab("Timer", "/timer"),
      new Tab("Qrcode-Share", "/qr"),
      new Tab("Planningpoker", "/poker")
    )
  }
}
