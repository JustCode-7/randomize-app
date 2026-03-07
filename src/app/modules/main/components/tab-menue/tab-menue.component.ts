import {Component} from '@angular/core';
import {MainMenueService} from "../../service/main-menue.service";
import {MatTabsModule} from "@angular/material/tabs";
import {NgForOf} from "@angular/common";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-tab-menue',
  templateUrl: './tab-menue.component.html',
  standalone: true,
  imports: [
    MatTabsModule,
    NgForOf,
    RouterLink,
    RouterOutlet
  ]
})
export class TabMenueComponent {

  constructor(public readonly mainMenueService: MainMenueService) {
  }
}
