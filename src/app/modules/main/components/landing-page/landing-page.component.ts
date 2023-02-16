import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MainMenueService} from "../../service/main-menue.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

  constructor(private router: Router, public readonly mainMenueService: MainMenueService) {
  }

}
