import { Component, OnInit } from '@angular/core';
import { RandomServiceService } from 'src/app/modules/ramdomize-modul/services/random-service.service';

@Component({
  selector: 'app-randomized-name-dialog',
  template: `
    <div>
      <h1>{{randomizedService._randomizedName }}. You have been randomized.</h1>
    </div>
  `,
  styles: []
})
export class RandomizedNameDialogComponent implements OnInit {

  randomizedService: RandomServiceService;
  constructor(randomizedService: RandomServiceService) {
    this.randomizedService = randomizedService;
  }

  ngOnInit(): void {
  }

}
