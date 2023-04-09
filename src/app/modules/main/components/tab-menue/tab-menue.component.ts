import {Component} from '@angular/core';
import {MainMenueService} from "../../service/main-menue.service";

@Component({
  selector: 'app-tab-menue',
  templateUrl: './tab-menue.component.html',
})
export class TabMenueComponent {

  constructor(public readonly mainMenueService: MainMenueService) {
  }
}
