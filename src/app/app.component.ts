import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import {MainMenueService} from "./modules/main/service/main-menue.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'randomize-app';
  appVersion: string = environment.appVersion;

  constructor(public readonly mainMenueService: MainMenueService) {
  }
}
