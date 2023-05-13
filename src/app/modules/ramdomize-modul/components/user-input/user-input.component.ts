import {Component} from '@angular/core';
import {RandomServiceService} from '../../services/random-service.service';

@Component({
  selector: 'app-input-table',
  templateUrl: './user-input.component.html',
})
export class UserInputComponent {
  value = 'Fill me with text';
  index: number = 0;
  randomizedService: RandomServiceService;

  constructor(randomizedService: RandomServiceService) {
    this.randomizedService = randomizedService;
  }

  addName(name: string) {
    if (name.length > 0) {
      this.randomizedService._names.push(name);
      this.randomizedService.setItemsToCache();
      this.value = "";
    }
  }
}
