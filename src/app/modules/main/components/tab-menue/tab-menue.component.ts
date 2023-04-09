import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MainMenueService} from "../../service/main-menue.service";

@Component({
  selector: 'app-tab-menue',
  templateUrl: './tab-menue.component.html',
})
export class TabMenueComponent {

  constructor(private router: Router, public readonly mainMenueService: MainMenueService) {
  }
}
