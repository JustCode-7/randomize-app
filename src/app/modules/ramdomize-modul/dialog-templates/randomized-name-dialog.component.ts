import {Component} from '@angular/core';
import {RandomServiceService} from 'src/app/modules/ramdomize-modul/services/random-service.service';

@Component({
  selector: 'app-randomized-name-dialog',
  template: `
    <h3 mat-dialog-title>randomized:</h3>
    <div mat-dialog-content>
      <h1 style="color:yellow;"> {{ randomizedService._randomizedName }}</h1>
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
