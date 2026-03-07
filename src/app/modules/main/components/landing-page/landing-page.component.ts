import {Component} from '@angular/core';
import {MainMenueService} from "../../service/main-menue.service";
import {environment} from 'src/environments/environment';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgForOf,
    NgStyle,
    RouterLink
  ]
})
export class LandingPageComponent {
  appVersion: string = environment.appVersion;

  constructor(public readonly mainMenueService: MainMenueService) {
  }

}
