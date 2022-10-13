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
      new Tab("randomizer", "/"),
      new Tab("timer", "/timer"),
      new Tab("qrcode", "/qr"),
      new Tab("poker", "/poker")
    )
  }
}
