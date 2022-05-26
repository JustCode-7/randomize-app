import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { RandomServiceService } from 'src/app/modules/ramdomize-modul/services/random-service.service';

@Component({
  selector: 'app-randomized-name-dialog',
  template: `
    <div>
      <h1>randomized: {{ randomizedService._randomizedName }}</h1>
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
