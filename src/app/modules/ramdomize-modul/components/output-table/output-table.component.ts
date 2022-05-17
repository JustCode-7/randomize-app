import { Component, OnInit } from '@angular/core';
import { RandomServiceService } from '../../services/random-service.service';

@Component({
  selector: 'app-output-table',
  templateUrl: './output-table.component.html',
  styleUrls: ['./output-table.component.scss']
})
export class OutputTableComponent implements OnInit {

  value = 'Fill me with text';
  index: number = 0;
  ind1 = 1;
  randomizedService: RandomServiceService;

  constructor(randomizedService: RandomServiceService) {
    this.randomizedService = randomizedService;
  }
  ngOnInit(): void {
    if (this.randomizedService.getItemFromCache()?.length == 0) {
      this.randomizedService.setItemsToCache();
    } else {
      this.randomizedService.reloadFromCache();
    }
  }
}
