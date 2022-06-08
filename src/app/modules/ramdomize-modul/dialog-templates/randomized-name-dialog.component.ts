import { Component } from '@angular/core';
import { RandomServiceService } from 'src/app/modules/ramdomize-modul/services/random-service.service';

@Component({
  selector: 'app-randomized-name-dialog',
  template: `
    <div>
      <h3>randomized:</h3><h1 style="color:yellow;"> {{ randomizedService._randomizedName }}</h1>
    </div>
  `,
  styles: []
})
export class RandomizedNameDialogComponent {

  randomizedService: RandomServiceService;

  constructor(randomizedService: RandomServiceService) {
    this.randomizedService = randomizedService;
  }
}
