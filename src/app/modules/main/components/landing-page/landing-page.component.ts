import {Component} from '@angular/core';
import {MainMenueService} from "../../service/main-menue.service";
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
  appVersion: string = environment.appVersion;

  constructor(public readonly mainMenueService: MainMenueService) {
  }

}
